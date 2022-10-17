//논리 연산자 Logical Operators
//&& 그리고
//|| 또는
//! 부정(단항연산자에서 온것)
//!!불리언값으로 변환 (단항연산자 응요버전)

let num = 8;
if (num >= 0 || num > 20) {
  console.log('ok');
}
if (num != 9) {
  console.log('not 9');
}

console.log(!'text'); //문자열은 true인데 not이 붙어서 false로 나온다
console.log(!!'text');
