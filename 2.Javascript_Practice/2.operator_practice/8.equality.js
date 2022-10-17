//동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 같음
// !== 값과 타입이 다름
console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 == '2'); //true
console.log(2 === '2'); //flase
console.log(1 == true); //true
console.log(1 === true); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
console.log(obj1.name == obj2.name); //true
console.log(obj1.name === obj2.name); //true

let obj3 = obj2;
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true
