import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, timingSafeEqual } from 'crypto';

type AdminTokenPayload = {
  email: string;
  exp: number;
};

@Injectable()
export class AdminAuthService {
  constructor(private readonly configService: ConfigService) {}

  login(email: string, password: string) {
    const expectedEmail = this.configService.get<string>('ADMIN_EMAIL') ?? 'admin@aurora.local';
    const expectedPassword = this.configService.get<string>('ADMIN_PASSWORD') ?? 'change-me';

    if (email !== expectedEmail || password !== expectedPassword) {
      throw new UnauthorizedException('Invalid admin credentials.');
    }

    const expiresAt = Math.floor(Date.now() / 1000) + 60 * 60 * 12;
    const payload: AdminTokenPayload = {
      email,
      exp: expiresAt,
    };

    return {
      token: this.sign(payload),
      expiresAt,
      email,
    };
  }

  verify(token: string) {
    const [encodedPayload, signature] = token.split('.');

    if (!encodedPayload || !signature) {
      throw new UnauthorizedException('Invalid admin token.');
    }

    const expectedSignature = this.createSignature(encodedPayload);
    const received = Buffer.from(signature);
    const expected = Buffer.from(expectedSignature);

    if (received.length !== expected.length || !timingSafeEqual(received, expected)) {
      throw new UnauthorizedException('Invalid admin token.');
    }

    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString()) as AdminTokenPayload;

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      throw new UnauthorizedException('Admin session expired.');
    }

    return payload;
  }

  private sign(payload: AdminTokenPayload) {
    const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
    const signature = this.createSignature(encodedPayload);

    return `${encodedPayload}.${signature}`;
  }

  private createSignature(value: string) {
    const secret = this.configService.get<string>('ADMIN_TOKEN_SECRET') ?? 'aurora-admin-secret';

    return createHmac('sha256', secret).update(value).digest('base64url');
  }
}
