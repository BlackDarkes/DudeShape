import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SubNewsModule } from './modules/sub-news/sub-news.module';
import { FurnitureModule } from './modules/furniture/furniture.module';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { AuthModule } from './modules/auth/auth.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { CartModule } from './modules/cart/cart.module';

@Module({
  imports: [AuthModule, UserModule, SubNewsModule, FurnitureModule, PurchasesModule, FeedbackModule, CartModule],
})
export class AppModule {}
