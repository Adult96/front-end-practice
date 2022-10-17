//MDN Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

//Spread 연산자, 전개구문
//모든 Iterable은 spread될 수 있다
//순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다
//func(...iterable)
//[...iterable]
//{...obj}
//EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];

let text = add(nums[0], nums[1], nums[2]);
//⬇️ 인자 간편하게
text = add(...nums); //스프레드 연산자

console.log(text);

//Rest parameters
function sum(first, sceond, ...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);

const fruits1 = ['🍌', '🍎'];
const fruits2 = ['🍇', '🍑'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '🍎', ...fruits2];
console.log(arr);

//Object
const ellie = { name: 'sungin', age: 27, home: { address: 'home ' } };
const updated = {
  ...ellie,
  job: 'front End',
};
console.log(updated);
