import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import OpenAI from "openai";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

@Injectable()
export class EmbeddingsService {
  private readonly openaiClient: OpenAI | null;
  private readonly bedrockClient: BedrockRuntimeClient | null;
  private readonly provider: "openai" | "bedrock" | "local";
  private readonly embeddingModel: string;
  private readonly dimensions = 128;

  constructor(private readonly configService: ConfigService) {
    const openaiApiKey = this.configService.get<string>("OPENAI_API_KEY");
    const awsRegion = this.configService.get<string>("AWS_REGION");
    const awsAccessKeyId = this.configService.get<string>("AWS_ACCESS_KEY_ID");
    const awsSecretAccessKey = this.configService.get<string>(
      "AWS_SECRET_ACCESS_KEY",
    );

    this.provider =
      this.configService.get<"openai" | "bedrock" | "local">(
        "EMBEDDING_PROVIDER",
      ) ?? "local";

    this.openaiClient = openaiApiKey
      ? new OpenAI({ apiKey: openaiApiKey })
      : null;

    if (awsRegion && awsAccessKeyId && awsSecretAccessKey) {
      this.bedrockClient = new BedrockRuntimeClient({
        region: awsRegion,
        credentials: {
          accessKeyId: awsAccessKeyId,
          secretAccessKey: awsSecretAccessKey,
        },
      });
    } else {
      this.bedrockClient = null;
    }

    if (this.provider === "bedrock") {
      this.embeddingModel =
        this.configService.get<string>("BEDROCK_EMBEDDING_MODEL") ??
        "amazon.titan-embed-text-v1";
    } else {
      this.embeddingModel =
        this.configService.get<string>("OPENAI_EMBEDDING_MODEL") ??
        "text-embedding-3-small";
    }
  }

  async embedText(text: string): Promise<number[]> {
    const normalizedText = text.trim();

    if (!normalizedText) {
      return new Array<number>(this.dimensions).fill(0);
    }

    if (this.provider === "openai" && this.openaiClient) {
      const response = await this.openaiClient.embeddings.create({
        model: this.embeddingModel,
        input: normalizedText,
      });

      return response.data[0]?.embedding ?? [];
    }

    if (this.provider === "bedrock" && this.bedrockClient) {
      const command = new InvokeModelCommand({
        modelId: this.embeddingModel,
        body: JSON.stringify({
          inputText: normalizedText,
        }),
        contentType: "application/json",
        accept: "application/json",
      });

      const response = await this.bedrockClient.send(command);
      const body = JSON.parse(new TextDecoder().decode(response.body));

      return body.embedding ?? [];
    }

    return this.embedLocally(normalizedText);
  }

  async embedTexts(texts: string[]): Promise<number[][]> {
    const normalizedTexts = texts.map((text) => text.trim());

    if (normalizedTexts.length === 0) {
      return [];
    }

    if (this.provider === "openai" && this.openaiClient) {
      const response = await this.openaiClient.embeddings.create({
        model: this.embeddingModel,
        input: normalizedTexts,
      });

      return response.data.map((item) => item.embedding);
    }

    if (this.provider === "bedrock" && this.bedrockClient) {
      // Bedrock (Titan) doesn't support batching in a single InvokeModel call for Titan Text Embeddings
      // We need to process them individually or use a loop.
      // For now, let's process them in parallel.
      return Promise.all(normalizedTexts.map((text) => this.embedText(text)));
    }

    return normalizedTexts.map((text) => this.embedLocally(text));
  }

  getProvider() {
    return this.provider;
  }

  isUsingOpenAi() {
    return this.provider === "openai" && Boolean(this.openaiClient);
  }

  isUsingBedrock() {
    return this.provider === "bedrock" && Boolean(this.bedrockClient);
  }

  private embedLocally(text: string) {
    const vector = new Array<number>(this.dimensions).fill(0);
    const tokens = this.tokenize(text);

    if (tokens.length === 0) {
      return vector;
    }

    for (const token of tokens) {
      const bucket = this.hashToken(token) % this.dimensions;
      vector[bucket] += 1;
    }

    return this.normalize(vector);
  }

  cosineSimilarity(left: number[], right: number[]) {
    if (
      left.length === 0 ||
      right.length === 0 ||
      left.length !== right.length
    ) {
      return 0;
    }

    let dotProduct = 0;
    let leftMagnitude = 0;
    let rightMagnitude = 0;

    for (let index = 0; index < left.length; index += 1) {
      dotProduct += left[index] * right[index];
      leftMagnitude += left[index] * left[index];
      rightMagnitude += right[index] * right[index];
    }

    if (leftMagnitude === 0 || rightMagnitude === 0) {
      return 0;
    }

    return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
  }

  private tokenize(text: string) {
    return text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  }

  private normalize(vector: number[]) {
    const magnitude = Math.sqrt(
      vector.reduce((sum, value) => sum + value * value, 0),
    );

    if (magnitude === 0) {
      return vector;
    }

    return vector.map((value) => value / magnitude);
  }

  private hashToken(token: string) {
    let hash = 0;

    for (let index = 0; index < token.length; index += 1) {
      hash = (hash * 31 + token.charCodeAt(index)) >>> 0;
    }

    return hash;
  }
}
