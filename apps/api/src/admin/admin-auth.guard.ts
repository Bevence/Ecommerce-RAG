import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

import { AdminAuthService } from './admin-auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const authorization = request.headers.authorization;

    if (!authorization?.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing admin authorization token.');
    }

    const token = authorization.slice('Bearer '.length).trim();
    const payload = this.adminAuthService.verify(token);

    request['adminUser'] = payload;
    return true;
  }
}
