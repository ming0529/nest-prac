import { Injectable } from '@nestjs/common';
//AppService와 같은 서비스 객체는 실제로 리포지토리를 의존하며 비지니스 로직 실행을 담당
//서비스는 리포지토리를 반드시 의존해야 하며 이는 생성자를 통한 DI로 해결해야 합니다!
//단, 데이터베이스를 사용하는 경우에만 해당이 됩니다.
// @Injectable 데코레이터:AppService가 나를 필요로하면 언제든지 DI를 통해서 나를 써봐~
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// AppController가 AppService를 잘 의존하고 있죠.
