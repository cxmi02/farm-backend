import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Farm management API')
    .setDescription(
      'This API provides an interface for managing operations related to an animal farm. It allows performing CRUD (Create, Read, Update, Delete) operations on animal resources and managing relevant information about each animal.',
    )
    .setVersion('1.0')
    .addTag('Farm')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('/v1/api');
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/v1/api`);
}
bootstrap();