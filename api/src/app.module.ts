import { Module } from "@nestjs/common";
import { getTypeormConfig } from "./config/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule, ConfigService } from "@nestjs/config"; 
import { UserModule } from "./modules/user/user.module";
import { SubNewsModule } from "./modules/sub-news/sub-news.module";
import { FurnitureModule } from "./modules/furniture/furniture.module";
import { PurchasesModule } from "./modules/purchases/purchases.module";
import { FeedbackModule } from "./modules/feedback/feedback.module";
import { CartModule } from "./modules/cart/cart.module";
import { AuthModule } from "./modules/auth/auth.module";
import { join } from "path";

@Module({
	imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public"),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTypeormConfig,
      inject: [ConfigService],
    }),
		AuthModule,
		UserModule,
		SubNewsModule,
		FurnitureModule,
		PurchasesModule,
		FeedbackModule,
		CartModule,
	],
})
export class AppModule {}
