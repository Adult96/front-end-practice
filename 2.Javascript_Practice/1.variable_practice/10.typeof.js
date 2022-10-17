//typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환

//Javascript는 dynamic,weakly type 언어 이다
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; //할당된 값에 다라 동적으로 타입이 결정됨
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

//c언어 에선
//int variable = 123;
//일때 이미 varialble은 int(정수)로 타입이 결정되어있어
//c언어 정적인 타입이다
