import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { FeedbackEntity } from './entities/feedback.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      FeedbackEntity,
    ])
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
