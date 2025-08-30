import { Module } from '@nestjs/common';
import { SubNewsService } from './sub-news.service';
import { SubNewsController } from './sub-news.controller';

@Module({
  controllers: [SubNewsController],
  providers: [SubNewsService],
})
export class SubNewsModule {}
