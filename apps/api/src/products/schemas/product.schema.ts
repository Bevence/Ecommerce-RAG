import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ _id: false })
class ProductFeature {
  @Prop({ required: true })
  label!: string;

  @Prop({ required: true })
  value!: string;
}

@Schema({ _id: false })
class ProductKnowledgeChunk {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  body!: string;
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  slug!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  subtitle!: string;

  @Prop({ required: true })
  description!: string;

  @Prop({ required: true })
  category!: string;

  @Prop({ required: true })
  price!: number;

  @Prop({ required: true })
  heroImage!: string;

  @Prop({ type: [String], default: [] })
  gallery!: string[];

  @Prop({ type: [String], default: [] })
  tags!: string[];

  @Prop({ default: false })
  featured!: boolean;

  @Prop({ default: false })
  inStock!: boolean;

  @Prop({ min: 0, max: 5, default: 4.7 })
  rating!: number;

  @Prop({ default: 0 })
  reviewCount!: number;

  @Prop({ type: [ProductFeature], default: [] })
  features!: ProductFeature[];

  @Prop({ required: true })
  searchableText!: string;

  @Prop({ type: [ProductKnowledgeChunk], default: [] })
  knowledgeChunks!: ProductKnowledgeChunk[];

  @Prop({ type: [Number], default: [] })
  embedding!: number[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({
  name: 'text',
  subtitle: 'text',
  description: 'text',
  tags: 'text',
  searchableText: 'text',
});
