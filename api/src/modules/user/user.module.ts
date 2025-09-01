import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { FeedbackEntity } from '../feedback/entities/feedback.entity';
import { CartEntity } from '../cart/entities/cart.entity';
import { PurchasesEntity } from '../purchases/entities/purchases.entity';
import { PurchasesItemsEntity } from '../purchases/entities/purchasesItems.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      FeedbackEntity,
      CartEntity,
      PurchasesEntity,
      PurchasesItemsEntity,
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
