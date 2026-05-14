import { Injectable } from '@nestjs/common';

import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsRagService {
  buildRetrievalText(product: Pick<Product, 'name' | 'subtitle' | 'description' | 'searchableText' | 'tags' | 'features' | 'knowledgeChunks'>) {
    return [
      product.name,
      product.subtitle,
      product.description,
      product.searchableText,
      ...product.tags,
      ...product.features.map((feature) => `${feature.label} ${feature.value}`),
      ...product.knowledgeChunks.map((chunk) => `${chunk.title} ${chunk.body}`),
    ].join(' ');
  }

  buildSearchableText(product: Pick<Product, 'name' | 'subtitle' | 'description' | 'category' | 'tags' | 'features' | 'knowledgeChunks'>) {
    return [
      product.name,
      product.subtitle,
      product.description,
      product.category,
      ...product.tags,
      ...product.features.map((feature) => `${feature.label} ${feature.value}`),
      ...product.knowledgeChunks.map((chunk) => `${chunk.title} ${chunk.body}`),
    ].join(' ');
  }
}
