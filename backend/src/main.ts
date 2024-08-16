import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: 'https://main--digitalartistsapp.netlify.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(8080, '0.0.0.0');
}
bootstrap();
