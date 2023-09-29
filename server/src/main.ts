import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./api/app.module";
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from "src/helper/all-exceptions.filter";
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(configService.get('PORT')||3000);
}

bootstrap();
