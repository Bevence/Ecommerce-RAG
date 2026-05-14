import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductFeatureDto {
  @IsString()
  label!: string;

  @IsString()
  value!: string;
}

export class CreateProductKnowledgeChunkDto {
  @IsString()
  title!: string;

  @IsString()
  body!: string;
}

export class CreateProductDto {
  @IsOptional()
  @IsString()
  slug?: string;

  @IsString()
  name!: string;

  @IsString()
  subtitle!: string;

  @IsString()
  description!: string;

  @IsString()
  category!: string;

  @Type(() => Number)
  @IsNumber()
  price!: number;

  @IsString()
  heroImage!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  gallery?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  inStock?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(5)
  rating?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  reviewCount?: number;

  @IsOptional()
  @IsString()
  searchableText?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductFeatureDto)
  features?: CreateProductFeatureDto[];

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(24)
  @ValidateNested({ each: true })
  @Type(() => CreateProductKnowledgeChunkDto)
  knowledgeChunks?: CreateProductKnowledgeChunkDto[];
}
