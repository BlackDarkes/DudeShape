import { Controller, Get, Param, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.feedbackService.getUserFeedback(id);
  }

  @Post()
  async getAllFeedbacks() {
    return this.feedbackService.getAllFeedbackUsers();
  }
}
