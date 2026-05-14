import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Product, ProductDocument } from "./schemas/product.schema";

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly configService: ConfigService,
  ) {}

  async findAll() {
    return this.productModel
      .find()
      .sort({ featured: -1, createdAt: -1 })
      .lean();
  }

  async findFeatured() {
    return this.productModel.find({ featured: true }).limit(4).lean();
  }

  async findCategories() {
    return this.productModel.distinct("category");
  }

  async findBySlug(slug: string) {
    return this.productModel.findOne({ slug }).lean();
  }

  async create(product: Partial<Product>) {
    const created = await this.productModel.create(product);
    return created.toObject();
  }

  async updateBySlug(slug: string, product: Partial<Product>) {
    await this.productModel.updateOne({ slug }, { $set: product });
    return this.productModel.findOne({ slug: product.slug ?? slug }).lean();
  }

  async deleteBySlug(slug: string) {
    return this.productModel.findOneAndDelete({ slug }).lean();
  }

  async seedIfEmpty(seedProducts: Partial<Product>[]) {
    const count = await this.productModel.estimatedDocumentCount();
    if (count > 0) {
      return;
    }

    await this.productModel.insertMany(seedProducts);
  }

  async queryCatalog(category?: string) {
    const filter = category
      ? { category: new RegExp(`^${this.escapeRegex(category)}$`, "i") }
      : {};
    return this.productModel.find(filter).lean();
  }

  async updateEmbedding(slug: string, embedding: number[]) {
    await this.productModel.updateOne({ slug }, { $set: { embedding } });
  }

  async bulkUpsert(products: Partial<Product>[]) {
    await Promise.all(
      products.map((product) =>
        this.productModel.updateOne(
          { slug: product.slug },
          { $set: product },
          { upsert: true },
        ),
      ),
    );

    return this.productModel
      .find({
        slug: { $in: products.map((product) => product.slug) },
      })
      .lean();
  }

  async queryVectorSearch(options: {
    queryVector: number[];
    category?: string;
    limit: number;
  }) {
    const { queryVector, category, limit } = options;
    const indexName =
      this.configService.get<string>("MONGODB_VECTOR_INDEX") ??
      "products_embedding_index";

    if (queryVector.length === 0) {
      return [];
    }

    const vectorStage: {
      index: string;
      path: string;
      queryVector: number[];
      numCandidates: number;
      limit: number;
      filter?: { category: string };
    } = {
      index: indexName,
      path: "embedding",
      queryVector,
      numCandidates: Math.max(limit * 10, 50),
      limit,
    };

    if (category) {
      vectorStage.filter = {
        category,
      };
    }

    const result = await this.productModel.aggregate<
      Product & {
        vectorScore: number;
      }
    >([
      {
        $vectorSearch: vectorStage,
      },
      {
        $addFields: {
          vectorScore: { $meta: "vectorSearchScore" },
        },
      },
    ]);

    return result;
  }

  private escapeRegex(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}
