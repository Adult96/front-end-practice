//MDN 함수: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function

//사용예제 1
function add(a, b) {
  console.log('function');
  return a + b;
}
const result = add(1, 2);
console.log(result);

//사용예제 2
function userName(firstName, lastName) {
  return `${lastName}${firstName}`;
}

console.log(userName('박', '성인'));
