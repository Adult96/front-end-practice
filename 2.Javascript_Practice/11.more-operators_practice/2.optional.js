//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

//옵셔널 채이닝 연산자 Optional Chaining Operator
//ES11 (ECMAScript 2020)
//?.

//null 또는 undifined안 경우를 확인할때
let item = { price: 1 };
const price = item?.price; //const price = item && item.price; 연산자에서 중복이 되면 ?.로 생략가능
console.log(price);

let obj = { name: '😀', owner: { name: 'sungin' } };
const ownerName = obj?.owner?.name;
console.log(ownerName);

function printName(obj) {
  const ownerName = obj?.owner?.name; //obj && obj.owner && obj.owner.name
  console.log(ownerName);
}
printName();
