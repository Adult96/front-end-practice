//동결 ! Object.freeze
//추가❌,삭제❌,쓰기❌,속성 재정의❌
//단, 얕은 얼리기만 된다
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐕', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog.name);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '성인';
console.log(dog);

//밀봉! Object.seal
//값의 수정✅,추가❌,삭제❌,쓰기❌,속성 재정의❌
const cat = { ...dog };
// Object.assign(cat, dog);//복사 혹은 {...dog}
Object.seal(cat);
console.log(cat);
cat.name = '야옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog)); //true
console.log(Object.isSealed(cat)); //true

//확장 금지 preventExtensions
//추가❌ 확장❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); //false
tiger.name = '어어흥';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 7; //추가 안됨
console.log(tiger);
