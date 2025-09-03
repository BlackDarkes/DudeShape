import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PurchasesEntity } from './entities/purchases.entity';
import { Repository } from 'typeorm';
import { PurchasesItemsEntity } from './entities/purchasesItems.entity';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(PurchasesEntity)
    private readonly purchasesRepository: Repository<PurchasesEntity>,
    @InjectRepository(PurchasesItemsEntity)
    private readonly PurchasesItemsEntity: Repository<PurchasesItemsEntity>
  ) {}

  
}
