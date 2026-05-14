export type ProductFeature = {
  label: string;
  value: string;
};

export type ProductKnowledgeChunk = {
  title: string;
  body: string;
};

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  heroImage: string;
  gallery: string[];
  tags: string[];
  featured: boolean;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  features: ProductFeature[];
  searchableText: string;
  knowledgeChunks: ProductKnowledgeChunk[];
  embedding?: number[];
};

export type SearchResponse = {
  query: string;
  mode: 'catalog' | 'hybrid' | 'semantic';
  count: number;
  results: Array<
    Product & {
      score: number;
      scoreBreakdown: string[];
    }
  >;
  ragReady: {
    embeddingsStored: boolean;
    retrievalSource?: string;
    nextStep: string;
  };
};

export type AskAssistantResponse = {
  question: string;
  mode: 'catalog' | 'hybrid' | 'semantic';
  retrievedCount: number;
  answer: string;
  citations: Array<{
    slug: string;
    name: string;
  }>;
  model: string;
  configured: boolean;
  retrieved: Array<
    Product & {
      score: number;
      scoreBreakdown: string[];
    }
  >;
};

export type ProductInput = {
  slug?: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price: number;
  heroImage: string;
  gallery?: string[];
  tags?: string[];
  featured?: boolean;
  inStock?: boolean;
  rating?: number;
  reviewCount?: number;
  searchableText?: string;
  features?: ProductFeature[];
  knowledgeChunks?: ProductKnowledgeChunk[];
};

export type AdminLoginResponse = {
  token: string;
  expiresAt: number;
  email: string;
};
