//MDN 연산자 우선순위: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//연산자 우선순위
let a = 2;
let b = 3;
let result = (a + b) * 4; //+ 더하기를 먼저 계산하려면 괄호를 넣기
console.log(result);

result = a++ + b * 4;
console.log(result);
