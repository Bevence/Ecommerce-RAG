import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";

import { AdminAuthGuard } from "../admin/admin-auth.guard";
import { AskProductsDto } from "./dto/ask-products.dto";
import { BulkUpsertProductsDto } from "./dto/bulk-upsert-products.dto";
import { CreateProductDto } from "./dto/create-product.dto";
import { SearchProductsDto } from "./dto/search-products.dto";
import { ProductsAiService } from "./products.ai.service";
import { ProductsSearchService } from "./products.search.service";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productsSearchService: ProductsSearchService,
    private readonly productsAiService: ProductsAiService,
  ) {}

  @Get()
  async list() {
    return this.productsService.findAll();
  }

  @Get("featured")
  async featured() {
    return this.productsService.findFeatured();
  }

  @Get("categories")
  async categories() {
    return this.productsService.findCategories();
  }

  @Get("search")
  async search(@Query() query: SearchProductsDto) {
    const products = await this.productsService.search(query);
    const results = await this.productsSearchService.search(products, query);

    return {
      query: query.q ?? "",
      mode: query.mode ?? "hybrid",
      count: results.length,
      results,
      ragReady: {
        embeddingsStored: products.every(
          (product) => (product.embedding?.length ?? 0) > 0,
        ),
        retrievalSource: "bedrock-openai-or-local-embeddings",
        nextStep:
          "Call the ask endpoint with retrieved chunks to generate grounded answers for shoppers.",
      },
    };
  }

  @Post("ask")
  async ask(@Body() body: AskProductsDto) {
    const searchQuery: SearchProductsDto = {
      q: body.question,
      category: body.category,
      mode: body.mode ?? "semantic",
      limit: body.limit ?? 4,
    };
    const products = await this.productsService.search(searchQuery);
    const retrieved = await this.productsSearchService.search(
      products,
      searchQuery,
    );
    const aiAnswer = await this.productsAiService.answerQuestion(
      body.question,
      retrieved,
    );

    return {
      question: body.question,
      mode: searchQuery.mode,
      retrievedCount: retrieved.length,
      answer: aiAnswer.answer,
      citations: aiAnswer.citations,
      model: aiAnswer.model,
      configured: aiAnswer.configured,
      retrieved,
    };
  }

  @Post("admin")
  @UseGuards(AdminAuthGuard)
  async create(@Body() body: CreateProductDto) {
    return this.productsService.createProduct(body);
  }

  @Put("admin/:slug")
  @UseGuards(AdminAuthGuard)
  async update(@Param("slug") slug: string, @Body() body: CreateProductDto) {
    return this.productsService.updateProduct(slug, body);
  }

  @Delete("admin/:slug")
  @UseGuards(AdminAuthGuard)
  async remove(@Param("slug") slug: string) {
    return this.productsService.deleteProduct(slug);
  }

  @Post("admin/bulk")
  @UseGuards(AdminAuthGuard)
  async bulkUpsert(@Body() body: BulkUpsertProductsDto) {
    return this.productsService.bulkUpsertProducts(body.products);
  }

  @Post("admin/reindex")
  @UseGuards(AdminAuthGuard)
  async reindex() {
    return this.productsService.reindexEmbeddings();
  }

  @Get(":slug")
  async bySlug(@Param("slug") slug: string) {
    return this.productsService.getBySlug(slug);
  }

  @Get(":slug/retrieval-context")
  async retrievalContext(@Param("slug") slug: string) {
    const product = await this.productsService.getBySlug(slug);

    return {
      slug: product.slug,
      name: product.name,
      category: product.category,
      searchableText: product.searchableText,
      knowledgeChunks: product.knowledgeChunks,
      features: product.features,
      promptHint:
        "Use these chunks to ground generated product answers, comparisons, and shopping assistance.",
    };
  }
}
