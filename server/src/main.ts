import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./api/app.module";
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from "src/helper/all-exceptions.filter";
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';

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
  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  
  /* Listen on port */
  await app.listen(configService.get('PORT')||3000);
}

bootstrap();
