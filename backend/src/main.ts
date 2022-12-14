import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async () => await (await NestFactory.create(AppModule)).listen(4444, "https://universe-backend-v2.onrender.com"))();
