import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
  ) {}

  async showUserCart(id: string) {
    const userCart = this.cartRepository.find({ where: { userId: id } });
    return userCart;
  }

  async create(userId: string, furnitureId: string, quantity: number) {
    await this.cartRepository.save({
      userId,
      furnitureId,
      quantity
    });

    return {
      message: "Товар добавлен в корзину!",
    }
  }

  async updateCart(id: string, quantity: number) {
    await this.cartRepository.update({ id }, { quantity });
    return {
      message: "Количество изменилось!"
    }
  }

  async deleteCart(id: string) {
    await this.cartRepository.delete(id);
    return {
      message: "Товар удален из корзины!"
    }
  }
}
