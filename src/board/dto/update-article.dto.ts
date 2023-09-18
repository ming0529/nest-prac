import { PartialType } from '@nestjs/mapped-types';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}

// 말도 안되게 코드가 줄어들었습니다. 무조건 쓰셔야겠죠?!
//  아예 새로운 유형의 DTO를 작성하는 것이 아니면 항상 `@nestjs/mapped-types` 사용을 습관화하여 생산성을 높여주세요!
