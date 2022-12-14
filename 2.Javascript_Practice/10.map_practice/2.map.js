//MDN Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map([
  ['key1', '๐'],
  ['key2', '๐ฅ'],
]);
console.log(map);
//์ฌ์ด์ฆ ํ์ธ
console.log(map.size);
//์กด์ฌํ๋์ง ํ์ธ
console.log(map.has('๐')); //false key๋ก ํ์ธํด์ผํ๋ค
console.log(map.has('key1'));
//์ํ
map.forEach((value, key) => console.log(value, key));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//์ฐพ๊ธฐ
console.log(map.get('key1'));

//์ถ๊ฐ
map.set('key3', '๐');
console.log(map);
//์ญ์ 
map.delete('key3');
console.log(map);

//์ ๋ถ์ญ์ 
map.clear();
console.log(map);

// map๊ณผ ์ค๋ธ์ ํธ์์ ํฐ ์ฐจ์ด์ ? map์์๋ ๋ค์ํ ๋ฉ์๋๋ฅผ ์ธ์์๋ค
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '๋ง์๋ ์ฐ์ ' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]); //{ name: 'milk', price: 10, description: '๋ง์๋ ์ฐ์ ' } ์ค๋ธ์ ํธ๋ ๋์ ์ผ๋ก ์ ๊ทผ๊ฐ๋ฅ
console.log(map2[key]); //undefined
console.log(map2.get(key));
