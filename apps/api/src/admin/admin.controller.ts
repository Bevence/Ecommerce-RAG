import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';

import { AdminAuthService } from './admin-auth.service';

class AdminLoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

@Controller('admin')
export class AdminController {
  constructor(private readonly adminAuthService: AdminAuthService) {}

  @Post('login')
  login(@Body() body: AdminLoginDto) {
    return this.adminAuthService.login(body.email, body.password);
  }
}
