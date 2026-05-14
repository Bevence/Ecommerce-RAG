import { IsIn, IsInt, IsOptional, IsString, Max, Min } from "class-validator";
import { Type } from "class-transformer";

export class SearchProductsDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsIn(["catalog", "hybrid", "semantic"])
  mode?: "catalog" | "hybrid" | "semantic";

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(48)
  limit?: number;
}
