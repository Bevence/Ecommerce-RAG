import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminModule } from '../admin/admin.module';
import { ProductsController } from './products.controller';
import { EmbeddingsService } from './embeddings.service';
import { ProductsAiService } from './products.ai.service';
import { ProductsRagService } from './products.rag.service';
import { ProductsRepository } from './products.repository';
import { ProductsSearchService } from './products.search.service';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    ConfigModule,
    AdminModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ProductsRepository,
    ProductsSearchService,
    ProductsRagService,
    EmbeddingsService,
    ProductsAiService,
  ],
})
export class ProductsModule {}
