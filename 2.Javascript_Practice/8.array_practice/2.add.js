const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//추가, 삭제 = 좋지 않은 방식❌

fruits[4] = 'hi';
console.log(fruits);

delete fruits[3];
console.log(fruits);
