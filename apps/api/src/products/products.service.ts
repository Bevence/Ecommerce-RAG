import {
  ConflictException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from "@nestjs/common";

import { CreateProductDto } from "./dto/create-product.dto";
import { EmbeddingsService } from "./embeddings.service";
import { SearchProductsDto } from "./dto/search-products.dto";
import { ProductsRagService } from "./products.rag.service";
import { ProductsRepository } from "./products.repository";
import { Product } from "./schemas/product.schema";
import { seedProducts } from "./products.data";

@Injectable()
export class ProductsService implements OnModuleInit {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly productsRagService: ProductsRagService,
    private readonly embeddingsService: EmbeddingsService,
  ) {}

  async onModuleInit() {
    await this.productsRepository.seedIfEmpty(seedProducts);
    await this.backfillEmbeddings();
  }

  async findAll() {
    return this.productsRepository.findAll();
  }

  async findFeatured() {
    return this.productsRepository.findFeatured();
  }

  async findCategories() {
    return this.productsRepository.findCategories();
  }

  async search(query: SearchProductsDto) {
    return this.productsRepository.queryCatalog(query.category);
  }

  async getBySlug(slug: string) {
    const product = await this.productsRepository.findBySlug(slug);

    if (!product) {
      throw new NotFoundException(`Product "${slug}" was not found.`);
    }

    return product;
  }

  async createProduct(input: CreateProductDto) {
    const product = await this.prepareProduct(input);
    try {
      return await this.productsRepository.create(product);
    } catch {
      throw new ConflictException(
        `A product with slug "${product.slug}" already exists. Use update instead of create.`,
      );
    }
  }

  async updateProduct(slug: string, input: CreateProductDto) {
    const existingProduct = await this.productsRepository.findBySlug(slug);

    if (!existingProduct) {
      throw new NotFoundException(`Product "${slug}" was not found.`);
    }

    const product = await this.prepareProduct(input, existingProduct);

    try {
      return await this.productsRepository.updateBySlug(slug, product);
    } catch {
      throw new ConflictException(
        `Unable to update "${slug}". The requested slug "${product.slug}" may already be in use.`,
      );
    }
  }

  async deleteProduct(slug: string) {
    const deletedProduct = await this.productsRepository.deleteBySlug(slug);

    if (!deletedProduct) {
      throw new NotFoundException(`Product "${slug}" was not found.`);
    }

    return {
      deleted: true,
      slug,
    };
  }

  async bulkUpsertProducts(inputs: CreateProductDto[]) {
    const products = await Promise.all(
      inputs.map((input) => this.prepareProduct(input)),
    );
    return this.productsRepository.bulkUpsert(products);
  }

  async reindexEmbeddings() {
    await this.backfillEmbeddings(true);
    return {
      reindexed: true,
    };
  }

  private async backfillEmbeddings(force = false) {
    const products = await this.productsRepository.findAll();
    const productsNeedingEmbeddings = products.filter(
      (product) => force || !product.embedding?.length,
    );

    if (productsNeedingEmbeddings.length === 0) {
      return;
    }

    const retrievalTexts = productsNeedingEmbeddings.map((product) =>
      this.productsRagService.buildRetrievalText(product),
    );
    const embeddings = await this.embeddingsService.embedTexts(retrievalTexts);

    await Promise.all(
      productsNeedingEmbeddings.map((product, index) =>
        this.productsRepository.updateEmbedding(
          product.slug,
          embeddings[index] ?? [],
        ),
      ),
    );
  }

  private async prepareProduct(
    input: CreateProductDto,
    existingProduct?: Product,
  ): Promise<Partial<Product>> {
    const features = input.features ?? existingProduct?.features ?? [];
    const knowledgeChunks =
      input.knowledgeChunks ?? existingProduct?.knowledgeChunks ?? [];
    const tags = input.tags ?? existingProduct?.tags ?? [];
    const gallery = input.gallery ?? existingProduct?.gallery ?? [];
    const slug =
      input.slug?.trim() || existingProduct?.slug || this.slugify(input.name);
    const searchableText =
      input.searchableText?.trim() ||
      this.productsRagService.buildSearchableText({
        name: input.name,
        subtitle: input.subtitle,
        description: input.description,
        category: input.category,
        tags,
        features,
        knowledgeChunks,
      } as Product);
    const retrievalText = this.productsRagService.buildRetrievalText({
      name: input.name,
      subtitle: input.subtitle,
      description: input.description,
      searchableText,
      tags,
      features,
      knowledgeChunks,
    } as Product);
    const embedding = await this.embeddingsService.embedText(retrievalText);

    return {
      slug,
      name: input.name.trim(),
      subtitle: input.subtitle.trim(),
      description: input.description.trim(),
      category: input.category.trim(),
      price: input.price,
      heroImage: input.heroImage.trim(),
      gallery: gallery.map((item) => item.trim()).filter(Boolean),
      tags: tags.map((item) => item.trim()).filter(Boolean),
      featured: input.featured ?? existingProduct?.featured ?? false,
      inStock: input.inStock ?? existingProduct?.inStock ?? true,
      rating: input.rating ?? existingProduct?.rating ?? 4.7,
      reviewCount: input.reviewCount ?? existingProduct?.reviewCount ?? 0,
      features,
      searchableText,
      knowledgeChunks,
      embedding,
    };
  }

  private slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
}
