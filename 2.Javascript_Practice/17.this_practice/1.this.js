'use strict';
/**
 * 글로벌 컨텍스트의 this
 * -브라우저:
 * -노드:
 */

//-노드
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout() == setTimeout()

//-브라우저
//글로벌객체는 window

console.clear();

/**
 * 함수 내부에서의 this
 * 출력시 글로벌 객체를 접근
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();
/**
 * 생성자 함수 또는 클래스에서의 this,앞으로 생성될 인스턴스 자체를 가리킴
 */
