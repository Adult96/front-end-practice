//MDN Symbol: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

//Symbol 심벌
//유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'hello');
// console.log(map.get(key2));
// console.log(key1 === key2);

const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'hello');
console.log(map.get(key2));
console.log(key1 === key2);

//동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for('key'); //.for는 전역 레지스트리에 추가함
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1)); //key  Symbol.for을 써서 전역 레지스트리에 추가하였기때문에 검색이 가능하다
console.log(Symbol.keyFor(key1)); //undefined Symbol타입으로 'key'를 추가하였기 때문에 전역 레지스트리에 없어서 검색이 불가능하다

const obj = { [k1]: 'hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
