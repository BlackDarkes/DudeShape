import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedbackEntity } from './entities/feedback.entity';
import { useContainer } from 'class-validator';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FeedbackEntity)
    private readonly feedbackRepository: Repository<FeedbackEntity>,
  ) {}

  async getUserFeedback(userId: string) {
    const userFeedbacks = this.userRepository
      .createQueryBuilder("users")
      .select(["users.id as id", "users.name as name", "feedbacks.message as message", "feedbacks.stars as stars"])
      .innerJoin("users.feedbacks", "feedbacks")
      .where("users.id = :id", { id: userId })
      .getRawOne()

    return userFeedbacks;
  };

  async getAllFeedbackUsers() {
    const usersFeedback = this.userRepository
      .createQueryBuilder("users")
      .select(["users.id as id", "users.name as name", "feedbacks.message as message", "feedbacks.stars as stars"])
      .innerJoin("users.feedbacks", "feedbacks")
      .getRawMany()

    return usersFeedback
  }
} 
