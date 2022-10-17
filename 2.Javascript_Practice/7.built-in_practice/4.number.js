//MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); //1.7976931348623157e+308 e+308(10의 308승)
console.log(Number.MIN_VALUE); //최소값
console.log(Number.MAX_SAFE_INTEGER); //안전하게 사용가능한 최대값
console.log(Number.MIN_SAFE_INTEGER); //안전하게 사용가능한 최쇠값
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//유용한 사용예제

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

//지수 표기법(매우 크거나 작은 숫자를 표기할때 시용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 123.123;
console.log(num4.toFixed());

//숫자를 문자로
console.log(num4.toString());
//숫자를 그나라 언어로 표기
console.log(num4.toLocaleString('ar-EG'));
//원하는 자릿수까지 유효하도록 표현,반올림함
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //전체 자릿수가 표기가 안될때는 지수표기법으로 반환

console.log(Number.EPSILON); //0과 1사이에서 나타낼수 있는 가장 작은수
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003 num의 원시값은 10진수 이지만 log로 출력할때는 2진수로 변환하여 계산후 10진수로 출력하기때문에

function isEqual(original, expected) {
  return original === expected;
}

console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //false 위에서 계산한 num 값이  0.10000000000000003이기 때문에

function isEqual_(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON; //EPSILON Static Property
}
