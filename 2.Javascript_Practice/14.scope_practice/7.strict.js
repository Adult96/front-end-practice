//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//엄격 모드 strict mode
//리워크와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict'; //파일 최상단에 엄격모드 실행 코드
let x = 1;
delete x; //엄격 모드를 사용하면 delete로 변수 삭제 불가능

function add(x) {
  var a = 2;
  b = a + x; //엄격 모드 사용시 b변수 키워드 생략 불가능
  console.log(this); ////엄격 모드 사용시 함수 내부에서 this사용 불가
}
add(1);

const array = [1, 2, 3];
for (num of array) {
  ////엄격 모드 사용시 num변수 키워드 생략 불가능
  console.log(num);
}
