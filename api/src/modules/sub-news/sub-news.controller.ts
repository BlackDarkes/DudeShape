import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SubNewsService } from './sub-news.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@Controller('sub-news')
export class SubNewsController {
  constructor(private readonly subNewsService: SubNewsService) {}

  @Post("/get-all")
  @UseGuards(JwtAuthGuard)
  async getAll() {
    return this.subNewsService.getAll();
  }

  @Post("")
  async create(@Body("email") email: string) {
    return this.subNewsService.create(email);
  }
}
