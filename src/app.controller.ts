import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Testing...';
  }

  @Post('/login')
  login() {}

  @Post('/register')
  register() {}
}
