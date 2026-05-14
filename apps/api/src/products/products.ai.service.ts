import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

import { Product } from './schemas/product.schema';

type AnswerResult = {
  answer: string;
  configured: boolean;
  model: string;
  citations: Array<{ slug: string; name: string }>;
};

@Injectable()
export class ProductsAiService {
  private readonly openaiClient: OpenAI | null;
  private readonly bedrockClient: BedrockRuntimeClient | null;
  private readonly provider: 'openai' | 'bedrock' | 'local';
  private readonly responseModel: string;

  constructor(private readonly configService: ConfigService) {
    const openaiApiKey = this.configService.get<string>('OPENAI_API_KEY');
    const awsRegion = this.configService.get<string>('AWS_REGION');
    const awsAccessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
    const awsSecretAccessKey = this.configService.get<string>(
      'AWS_SECRET_ACCESS_KEY',
    );

    this.provider =
      this.configService.get<'openai' | 'bedrock' | 'local'>(
        'RESPONSE_PROVIDER',
      ) ?? 'local';

    this.openaiClient = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;

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

    if (this.provider === 'bedrock') {
      this.responseModel =
        this.configService.get<string>('BEDROCK_RESPONSE_MODEL') ??
        'anthropic.claude-3-sonnet-20240229-v1:0';
    } else {
      this.responseModel =
        this.configService.get<string>('OPENAI_RESPONSE_MODEL') ??
        'gpt-5.4-mini';
    }
  }

  async answerQuestion(question: string, products: Product[]): Promise<AnswerResult> {
    const citations = products.map((product) => ({
      slug: product.slug,
      name: product.name,
    }));

    const context = products
      .map(
        (product, index) =>
          [
            `Source ${index + 1}: ${product.name} (${product.slug})`,
            `Category: ${product.category}`,
            `Subtitle: ${product.subtitle}`,
            `Description: ${product.description}`,
            `Features: ${product.features.map((feature) => `${feature.label}: ${feature.value}`).join('; ')}`,
            `Knowledge: ${product.knowledgeChunks.map((chunk) => `${chunk.title}: ${chunk.body}`).join('; ')}`,
          ].join('\n'),
      )
      .join('\n\n');

    if (this.provider === 'openai' && this.openaiClient) {
      const response = await this.openaiClient.responses.create({
        model: this.responseModel,
        instructions:
          'You are a retail AI assistant. Answer only from the provided product context. If the context is insufficient, say so briefly. Mention specific products when appropriate and keep the answer concise and helpful.',
        input: `Customer question: ${question}\n\nRetrieved product context:\n${context}`,
      });

      return {
        answer: response.output_text.trim(),
        configured: true,
        model: this.responseModel,
        citations,
      };
    }

    if (this.provider === 'bedrock' && this.bedrockClient) {
      const command = new InvokeModelCommand({
        modelId: this.responseModel,
        body: JSON.stringify({
          anthropic_version: 'bedrock-2023-05-31',
          max_tokens: 1000,
          system:
            'You are a retail AI assistant. Answer only from the provided product context. If the context is insufficient, say so briefly. Mention specific products when appropriate and keep the answer concise and helpful.',
          messages: [
            {
              role: 'user',
              content: `Customer question: ${question}\n\nRetrieved product context:\n${context}`,
            },
          ],
        }),
        contentType: 'application/json',
        accept: 'application/json',
      });

      const response = await this.bedrockClient.send(command);
      const body = JSON.parse(new TextDecoder().decode(response.body));

      return {
        answer: body.content[0].text.trim(),
        configured: true,
        model: this.responseModel,
        citations,
      };
    }

    return {
      answer: this.buildFallbackAnswer(question, products),
      configured: false,
      model: 'not-configured',
      citations,
    };
  }

  private buildFallbackAnswer(question: string, products: Product[]) {
    if (products.length === 0) {
      return `No matching products were retrieved for "${question}". Add products or connect OpenAI to generate grounded answers.`;
    }

    const topProducts = products
      .slice(0, 3)
      .map((product) => `${product.name}: ${product.subtitle}`)
      .join(' ');

    return `OpenAI is not configured yet, but the best retrieved products for "${question}" are ${topProducts}`;
  }
}
