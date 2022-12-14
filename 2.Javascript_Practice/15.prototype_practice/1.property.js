//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

const dog = { name: '๊ฐ', emoji: '๐' };
console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog); ///true
console.log(dog.hasOwnProperty('name')); //true

//์ค๋ธ์ ํธ์ ๊ฐ๊ฐ์ ํ๋กํผํฐ๋ ํ๋กํผํฐ ๋์คํฌ๋ฆฝํฐ๋ผ๊ณ  ํ๋ ๊ฐ์ฒด๋ก ์ ์ฅ๋จ
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '๋ฉ๋ฉ',
  writable: false, //๊ฐ ์์ 
  enumerable: false, //์ด๊ฑฐ
  configurable: false, //๊ตฌ์ฑ
});
console.log(dog.name); //name์ ์ด๊ฑฐ false๋ก ์ค์ ํด์ ์๋์ด
console.log(Object.keys(dog));
delete dog.name; //configurable false์ฌ์ ์ญ์  ๋ถ๊ฐ๋ฅ
console.log(dog.name);
