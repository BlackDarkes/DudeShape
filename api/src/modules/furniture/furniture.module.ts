import { Module } from '@nestjs/common';
import { FurnitureService } from './furniture.service';
import { FurnitureController } from './furniture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FurnitureEntity } from './entities/furniture.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FurnitureEntity])
  ],
  controllers: [FurnitureController],
  providers: [FurnitureService],
})
export class FurnitureModule {}
