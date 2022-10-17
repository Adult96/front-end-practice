console.log(globalThis);
console.log(this); //javascript 에선 this가 모듈을 가리키지만 전역 객체로도쓰인다
//web에서 this는 전역 객체이다
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)'); //eval 문자열을 값으로 평가해서 출력함
console.log(isFinite(1)); //isFinite 숫자가 유한한지 유한하지 않은지 확인하는 함수
console.log(isFinite(Infinity));

console.log(parseFloat('12.34')); //문자열을 실수로
console.log(parseInt('12.34')); //문자열을 정수로

//URL(URI, Uniform Resource Identifier 하위 개념)
//리소스를 나타낼수 있는 단 하나의 고유한 주소나 ID
//아스키 문자로만 구성되어야함
//한글이나 특수문자는 이스케이프 처리해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
