import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
//import { HttpExceptionFilter } from './commons/filters/http-exception.filter';
//import { ApiKeyGuard } from './guards/api-key.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();