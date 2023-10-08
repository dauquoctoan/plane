import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from "src/helper/all-exceptions.filter";
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  /* config validator */
  app.useGlobalPipes(new ValidationPipe());

  /* handle exceptions */
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  /* config swagger */
  const config = new DocumentBuilder()
    .setTitle('Plane docs')
    .setDescription('The plane API description')
    .setVersion('1.0')
    .addTag('Plane')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('docs', app, document);

  /* Listen on port */
  await app.listen(configService.get('PORT') || 3000);
}

bootstrap();
