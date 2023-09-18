import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//바로아래있는 appcontroller가  컨트롤 역할이야~하고 nest에게 알랴줌
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // private : 오직 클래스 내부에서만 접근할 수 있습니다.
  // readonly : 변수를 읽기 전용(immutable)으로 만듭니다.
  // 즉, 변수에 값을 한 번 할당하면 다른 값으로 변경할 수 없습니다.

  // HTTP GET으로 요청이 들어올 시 아래의 함수(코드에서는 getHello 함수)를 실행하라
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
//생성자에서 인자로 AppService 객체를 넘기면
//this.appService라는 멤버 변수에 AppService 객체가 주입 ; 의존성주입
//이렇게 생성자를 통한 DI를 Nest.js에서 지원

//컨트롤러는 서비스를 반드시 의존해야 하며 이는 생성자를 통한 DI로 해결해야 함

//IoC 와 DI  Inversion of Control의 준말로서 제어 역전
//constructor(private readonly appService: AppService) {}
//저거 대신
// 1. 사용하고 싶은 서비스 타입 객체를 미리 선언합니다
//  private appService: AppService
//  constructor() {
//    // 2. 생성자에서 실제로 사용할 서비스 객체를 직접 생성합니다.
//    this.appService = new AppService();
//  }
// 지금까지는 개발자가 사용하고 싶은 객체가 있으면 이것은 개발자가 생성부터 소멸까지 직접 관리해야 했습니다.
// 이렇게 직접 생성하면 의존하는 서비스가 변경되면 개발자도 그에 맞추어서 코드를 수정해야 합니다
// 하지만, IoC는 개발자가 사용하고 싶은 객체를 직접 생성하는 것이 아니라 객체의 생명주기 관리 자체를 외부(여기서는 Nest.js IoC 컨테이너)에 위임을 합니다!
// 즉, 객체의 관리를 컨테이너에 맡겨서 제어권이 넘어갔기 때문에 IoC(제어 역전)라고 하는 것입니다.
// IoC는 모듈 간 결합도를 낮추기 때문에 하나의 모듈이 변경되어도 다른 모듈들에는 영향을 최소화되어 웹 어플리케이션을 지속 가능하고 확장성 있게 해줍니다!

//DI는 이런 IoC를 수행하는 방법의 하나이며 Nest.js에서는 생성자를 통한 DI를 가장 기본적인 IoC 테크닉으로 생각하고 있습니다.
