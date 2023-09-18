//Nest.js 웹 어플리케이션의 진입점
//NestFactory 클래스의 create라는 정적 함수를 통해 Nest.js 어플리케이션 인스턴스를 새롭게 생성
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //AppModule이라는 모듈을 루트 모듈로 사용하는 Nest.js 어플리케이션 인스턴스를 생성해줘!
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();

//DTO의 유효성 검사를 하기 위해서는 main.ts에 ValidationPipe를 주입
