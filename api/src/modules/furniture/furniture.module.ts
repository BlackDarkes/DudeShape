import { Module } from '@nestjs/common';
import { FurnitureService } from './furniture.service';
import { FurnitureController } from './furniture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackEntity } from '../feedback/entities/feedback.entity';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedbackEntity])
  ],
  controllers: [FurnitureController],
  providers: [FurnitureService],
})
export class FurnitureModule {}
