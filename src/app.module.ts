import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';

//@가 붙는 키워드를 데코레이터라고 함.
//데코레이터란 해당 클래스나 함수가 어떤 역할을 수행하는지에 대해 Nest.js에 알려주는 역할
//AppModule이라는 클래스는 Nest.js 웹 어플리케이션 세계관에서 모듈이라는 역할을 할 거야~
@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//@module은 exports라는 속성도 가질수 있음
// - imports
//     - 해당 모듈에서 필요한 모듈의 집합을 정의합니다.
//     - 여기에 들어가는 모듈은 프로바이더(서비스)를 노출하는 모듈입니다.
//     - 가장 흔하게 임포트를 하는 모듈 중 하나는 [HttpModule(API 호출 모듈)](https://docs.nestjs.com/techniques/http-module)이 있습니다.
//     - 또한, 나중에 배우게 되는 [TypeOrmModule](https://docs.nestjs.com/techniques/database)을 이용하여 참조할 리포지토리를 가져오기도 합니다.
// - controllers
//     - 해당 모듈에서 사용하는 컨트롤러를 정의합니다.
// - providers
//     - 해당 모듈에서 사용하는 서비스를 정의합니다.
// - exports
//     - 해당 모듈에서 노출시킬 서비스를 정의합니다.
//     - 다른 모듈에서 해당 모듈의 서비스를 사용하기 위해서는 exports로 노출을 해야 사용할 수 있습니다
