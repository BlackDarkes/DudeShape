import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { CartEntity } from './entities/cart.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      CartEntity,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
