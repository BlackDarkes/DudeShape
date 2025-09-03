import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubNewsService } from './sub-news.service';

@Controller('sub-news')
export class SubNewsController {
  constructor(private readonly subNewsService: SubNewsService) {}

  @Post("/get-all")
  async getAll() {
    return this.subNewsService.getAll();
  }

  @Post("")
  async create(@Body("email") email: string) {
    return this.subNewsService.create(email);
  }
}
