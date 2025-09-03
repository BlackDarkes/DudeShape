import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(":id")
  async showUserCart(@Param("id") id: string) {
    return this.cartService.showUserCart(id);
  }

  @Post()
  async create(@Body("userId") userId: string, @Body("furnitureId") furnitureId: string, @Body("quantity") quantity: number) {
    return this.cartService.create(userId, furnitureId, quantity);
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body("quantity") quantity: number) {
    return this.cartService.updateCart(id, quantity);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.cartService.deleteCart(id);
  }
}
