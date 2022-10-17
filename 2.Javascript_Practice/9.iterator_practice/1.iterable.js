//MDN Interation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

//Iterable 하다는건 순회가 가능하다는거
//[Symbol.iterator]():Iterator;
//십볼 정의를 가진 객체나,측정한 함수가 Iterator를 리턴한다는것은
//순회가 가능한 객체이다 라는걸 알 수 있음
//순회가 가능하면 무엇을 할수있나 for..of, spread
const array = [1, 2, 3];
for (const iterator of array.values()) {
  console.log(iterator);
}

for (const iterator of array.keys()) {
  console.log(iterator);
}

for (const iterator of array.entries()) {
  console.log(iterator);
}

const obj = { 0: 1, 1: 2, 2: 3 };
for (const iterator in obj) {
  // key를 출력
  console.log(iterator);
}

const iterator = array.values();

// for (const item of iterator) {
//   console.log(item);
// }

// console.log(iterator.next().value);//1
// console.log(iterator.next().value);//2
// console.log(iterator.next().value);//3
// console.log(iterator.next().done );//true

while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item);
}
