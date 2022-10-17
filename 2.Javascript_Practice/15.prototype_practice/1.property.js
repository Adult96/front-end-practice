//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

const dog = { name: '개', emoji: '🐕' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); ///true
console.log(dog.hasOwnProperty('name')); //true

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false, //값 수정
  enumerable: false, //열거
  configurable: false, //구성
});
console.log(dog.name); //name을 열거 false로 설정해서 안나옴
console.log(Object.keys(dog));
delete dog.name; //configurable false여서 삭제 불가능
console.log(dog.name);
