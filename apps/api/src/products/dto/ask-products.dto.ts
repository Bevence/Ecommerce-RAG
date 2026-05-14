import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class AskProductsDto {
  @IsString()
  question!: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsIn(['catalog', 'hybrid', 'semantic'])
  mode?: 'catalog' | 'hybrid' | 'semantic';

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(8)
  limit?: number;
}
