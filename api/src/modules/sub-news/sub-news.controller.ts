import { Controller } from '@nestjs/common';
import { SubNewsService } from './sub-news.service';

@Controller('sub-news')
export class SubNewsController {
  constructor(private readonly subNewsService: SubNewsService) {}
}
