import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FurnitureEntity } from './entities/furniture.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FurnitureService {
  constructor(
    @InjectRepository(FurnitureEntity)
    private readonly furnitureRepository: Repository<FurnitureEntity>
  ) {}

  async getAll() {
    const furniture = await this.furnitureRepository.find();
    return furniture;
  }

  async getById(id: string) {
    const oneFurniture = await this.furnitureRepository.findOne({ where: { id } });
    return oneFurniture;
  }
}
