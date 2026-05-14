import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AdminController } from './admin.controller';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminAuthService } from './admin-auth.service';

@Module({
  imports: [ConfigModule],
  controllers: [AdminController],
  providers: [AdminAuthService, AdminAuthGuard],
  exports: [AdminAuthService, AdminAuthGuard],
})
export class AdminModule {}
