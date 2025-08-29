import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";
import { config } from 'dotenv';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: [
      "http://localhost:8000",
      `http://${process.env.HOST}:${process.env.PORT}`
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization", "Set-Cookie"],
    credential: true,
  })

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
