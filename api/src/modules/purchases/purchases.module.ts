import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchasesEntity } from './entities/purchases.entity';
import { UserEntity } from '../user/entities/user.entity';
import { PurchasesItemsEntity } from './entities/purchasesItems.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PurchasesEntity,
      PurchasesItemsEntity,
    ]),
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
