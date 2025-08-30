import { Module } from '@nestjs/common';
import { SubNewsService } from './sub-news.service';
import { SubNewsController } from './sub-news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubNewsEntity } from './entities/subNews.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubNewsEntity])
  ],
  controllers: [SubNewsController],
  providers: [SubNewsService],
})
export class SubNewsModule {}
