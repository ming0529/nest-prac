import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get('/articles')
  getArticles() {
    return this.boardService.getArticles();
  }
  @Get('/articles/:id')
  getArticleById(@Param('id') articleId: number) {
    return this.boardService.getArticleById(articleId);
  }

  @Post('/articles')
  createArticle(@Body() data: CreateArticleDto) {
    return this.boardService.createArticle(
      data.title,
      data.content,
      data.password,
    );
  }

  @Put('/articles/:id')
  updateArticle(
    @Param('id') articleId: number,
    @Body() data: UpdateArticleDto,
  ) {
    return this.boardService.updateArticle(
      articleId,
      data.title,
      data.content,
      data.password,
    );
  }

  @Delete('/articles/:id')
  deleteArticle(
    @Param('id') articleId: number,
    @Body() data: DeleteArticleDto,
  ) {
    return this.boardService.deleteArticle(articleId, data.password);
  }
}

//   `/articles/:id`에서 :id는 파라미터를 뜻합니다.
//   그래서 저 URI에 지정된 파라미터를 가져오기 위해서는 `@Param`이라는 데코레이터에 갖고 올 파라미터 이름을 넘겨야합니다.
//   여기서는 id라는 파라미터를 갖고 오는 것이기 때문에 `@Param(’id’)`라고 갖고 온 후 number 타입의 articleId로 id라는 파라미터를 받겠다는 얘기죠!

//   바디를 갖고 오는 것은 `@Body` 데코레이터를 사용하면 됩니다.
//   req.body로 전달되는 데이터를 UpdateArticleDto라는 타입의 객체의 data라는 변수로 받겠다는 의미입니다!
//   당연히, 잘못된 데이터가 있으면 ValidationPipe로 인해서 400 리턴이 자동으로 될 것입니다.
