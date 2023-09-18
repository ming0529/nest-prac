import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsNumber()
  readonly password: number;
}

// @IsString, @IsNumber()라는 데코레이터는 Nest.js에서 제공하는 데코레이터가 아닌 class-validator에서 제공하는 데코 레이터에요!
// 위의 코드에서는 클라이언트로부터 전달받아야 하는 title, content를 DTO 객체의 변수로 선언했고
// title, content 둘 중 하나라도 String 값으로 오지 않으면 자동으로 400 에러를 리턴합니다.
