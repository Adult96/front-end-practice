//MDN 삼항조건연산자: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

//삼항 조건 연산자 Trenary Operators
let fruit = 'orange';
if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('🤣');
}

fruit === 'apple' ? console.log('🍊') : console.log('🤣');

let emoji = fruit === 'apple' ? '🍎' : '🤣';
console.log(emoji);
