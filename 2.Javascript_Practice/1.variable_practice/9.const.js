//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1.상수 혹은
//2.상수변수 또는 변수 라고 부름

const text = 'hello'; //const text = 상수변수
// text = 'hi'; 이렇게 하면 안됨

const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

//apple = {}; 재할당 불가능

console.log(apple);
apple.name = 'orange'; //apple을 재할당 하는것은 불가능 하지만  오브젝트 안의 프로퍼티는 재할당가능
console.log(apple);
