import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubNewsEntity } from './entities/subNews.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubNewsService {
  constructor(
    @InjectRepository(SubNewsEntity)
    private readonly subNewsRepository: Repository<SubNewsEntity>
  ) {}

  async create(email: string) {
    await this.subNewsRepository.save({ email });
    return {
      message: "You subscribe to mailing",
    }
  }

  async getAll() {
    const users = this.subNewsRepository.find();
    return users;
  }
}
