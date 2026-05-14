import { Injectable } from '@nestjs/common';

import { EmbeddingsService } from './embeddings.service';
import { SearchProductsDto } from './dto/search-products.dto';
import { ProductsRepository } from './products.repository';
import { ProductsRagService } from './products.rag.service';
import { Product } from './schemas/product.schema';

type RankedProduct = Product & { score: number; scoreBreakdown: string[] };

@Injectable()
export class ProductsSearchService {
  constructor(
    private readonly embeddingsService: EmbeddingsService,
    private readonly productsRepository: ProductsRepository,
    private readonly productsRagService: ProductsRagService,
  ) {}

  async search(products: Product[], query: SearchProductsDto) {
    const normalizedQuery = query.q?.trim().toLowerCase() ?? '';
    const rawCategory = query.category?.trim();
    const category = rawCategory?.toLowerCase();
    const mode = query.mode ?? 'hybrid';
    const limit = query.limit ?? 12;

    const filteredProducts = products.filter((product) => {
      if (!category) {
        return true;
      }

      return product.category.toLowerCase() === category;
    });

    if (!normalizedQuery) {
      return filteredProducts.slice(0, limit).map((product) => ({
        ...product,
        score: 0,
        scoreBreakdown: ['No query supplied; returned catalog results.'],
      }));
    }

    const queryEmbedding = normalizedQuery ? await this.embeddingsService.embedText(normalizedQuery) : [];
    const vectorResults =
      mode === 'catalog'
        ? []
        : await this.tryVectorSearch({
            queryVector: queryEmbedding,
            category: rawCategory,
            limit,
          });

    if (mode === 'semantic' && vectorResults.length > 0) {
      return vectorResults.map((product) => ({
        ...product,
        score: Math.round((product.vectorScore ?? 0) * 100),
        scoreBreakdown: ['MongoDB Atlas vector search matched semantic similarity.'],
      }));
    }

    const lexicalRanked = filteredProducts
      .map((product) => this.rankProduct(product, normalizedQuery, queryEmbedding, mode))
      .filter((product) => product.score > 0)
      .sort((a, b) => b.score - a.score);

    if (mode === 'hybrid' && vectorResults.length > 0) {
      return this.mergeHybridResults(lexicalRanked, vectorResults, limit);
    }

    return lexicalRanked.slice(0, limit);
  }

  private rankProduct(
    product: Product,
    query: string,
    queryEmbedding: number[],
    mode: 'catalog' | 'hybrid' | 'semantic',
  ): RankedProduct {
    const scoreBreakdown: string[] = [];
    let score = 0;

    const productText = [
      product.name,
      product.subtitle,
      product.description,
      product.searchableText,
      ...product.tags,
      ...product.knowledgeChunks.map((chunk) => `${chunk.title} ${chunk.body}`),
    ]
      .join(' ')
      .toLowerCase();

    const queryTokens = query.split(/\s+/).filter(Boolean);

    for (const token of queryTokens) {
      if (product.name.toLowerCase().includes(token)) {
        score += 12;
        scoreBreakdown.push(`Strong title match for "${token}"`);
      }
      if (product.tags.some((tag) => tag.toLowerCase().includes(token))) {
        score += 7;
        scoreBreakdown.push(`Tag match for "${token}"`);
      }
      if (productText.includes(token)) {
        score += 4;
        scoreBreakdown.push(`Catalog text match for "${token}"`);
      }
    }

    if (mode !== 'catalog') {
      const semanticSignal = this.semanticScore(product, queryEmbedding);
      if (semanticSignal > 0) {
        score += semanticSignal;
        scoreBreakdown.push('Embedding similarity matched broader product intent.');
      }
    }

    if (product.featured) {
      score += 2;
    }

    if (product.inStock) {
      score += 1;
    }

    return {
      ...product,
      score,
      scoreBreakdown,
    };
  }

  private semanticScore(product: Product, queryEmbedding: number[]) {
    if (queryEmbedding.length === 0) {
      return 0;
    }

    const productEmbedding =
      product.embedding?.length === queryEmbedding.length
        ? product.embedding
        : [];
    const similarity = this.embeddingsService.cosineSimilarity(queryEmbedding, productEmbedding);

    return Math.round(similarity * 20);
  }

  private async tryVectorSearch(options: {
    queryVector: number[];
    category?: string;
    limit: number;
  }) {
    try {
      return await this.productsRepository.queryVectorSearch(options);
    } catch {
      return [];
    }
  }

  private mergeHybridResults(
    lexicalRanked: RankedProduct[],
    vectorResults: Array<Product & { vectorScore: number }>,
    limit: number,
  ) {
    const merged = new Map<string, RankedProduct>();

    for (const product of lexicalRanked) {
      merged.set(product.slug, { ...product });
    }

    for (const product of vectorResults) {
      const vectorScore = Math.round((product.vectorScore ?? 0) * 100);
      const existing = merged.get(product.slug);

      if (existing) {
        existing.score += vectorScore;
        existing.scoreBreakdown = [
          ...existing.scoreBreakdown,
          'MongoDB Atlas vector search boosted semantic relevance.',
        ];
        merged.set(product.slug, existing);
        continue;
      }

      merged.set(product.slug, {
        ...product,
        score: vectorScore,
        scoreBreakdown: ['MongoDB Atlas vector search matched semantic similarity.'],
      });
    }

    return [...merged.values()].sort((left, right) => right.score - left.score).slice(0, limit);
  }
}
