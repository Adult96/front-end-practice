//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

// import increase from './counter.js'; //모듈을 하나만 사용할때
// import { increase as increase1 } from './counter.js'; //여러개의 모듈을 사용할때(함수이름을 다르게 쓰고 싶을때)
// import { increase, getcount } from './counter.js'; //여러개의 모듈을 사용할때
import * as conuter from './counter.js'; //여러개의 모듈을 그룹화 해서 가져올때
// increase1();
// increase1();
conuter.increase();
conuter.increase();
const count = conuter.getcount();
console.log(count);
