//Higher Order Funtion

const fruits = ['π', 'π', 'π', 'π'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²(μ½λ°± ν¨μ)μ ν λ
fruits.forEach((value, index, array) => {
  console.log('-------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

//μ‘°κ±΄μ λ§λ (μ½λ°± ν¨μ) μμ΄νμ μ°Ύμλ
//find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π', price: 2, owner: { name: 'sungin' } };
const item2 = { name: 'π', price: 3 };
const item3 = { name: 'π£', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === 'π');
console.log('-------------------------');
console.log(result);

//findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((index) => index.name === 'π£');
console.log('-------------------------');
console.log(result);

//some:λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ true,false
result = products.some((index) => index.name === 'π£');
console.log('-------------------------');
console.log(result);

//every:λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ true,false
result = products.every((index) => index.name === 'π£');
console.log('-------------------------');
console.log(result);

//μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘
result = products.filter((index) => index.name === 'π');
console.log('-------------------------');
console.log(result);

// console.clear();

//map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 10);
console.log(result);
console.log('-------------------------');

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap : flatλ©μνΈμ κ°μ΄ λ°°μ΄μμ μ€λ³΅ λ°°μ΄μ μμ°
//Flatmap : μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€
result = nums.map((item) => [1, 2]);
console.log(result); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result); // [1, 2, 1, 2, 1,2, 1, 2, 1, 2]

result = ['PARK', 'SUNG', 'IN'].map((item) => item.split(''));
console.log(result); //[ [ 'P', 'A', 'R', 'K' ], [ 'S', 'U', 'N', 'G' ], [ 'I', 'N' ] ]

result = ['PARK', 'SUNG', 'IN'].flatMap((item) => item.split(''));
console.log(result); //['P', 'A', 'R', 'K','S', 'U', 'N', 'G','I', 'N']

//sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
//λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [4, 3, 2, 6, 0, 10];
numbers.sort();
console.log(numbers); //[ 0, 10, 2, 3, 4, 6 ] μ£Όμ ν΄μΌν μ ! μ«μλ λ¬Έμμ΄ μμΌλ‘ μ λ ¬λλ€

// λ¦¬ν΄κ° < 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
numbers.sort((a, b) => a - b); //1λ²μ§Έ λΉκ΅ a=4,b=3 2λ²μ§Έ λΉκ΅ a=3,b=2 3λ²μ§Έ λΉκ΅ a=6,b=0...
console.log(numbers);

// λ¦¬ν΄κ° > 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => b - a); //1λ²μ§Έ λΉκ΅ a=4,b=3 2λ²μ§Έ λΉκ΅ a=3,b=2 3λ²μ§Έ λΉκ΅ a=6,b=0...
console.log(numbers);

//reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); //0μΌλ‘ μ²μμ sum μ μ΄κΈ°ν

console.log(result);
//β¬οΈ κ°μν
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); //0μΌλ‘ μ²μμ sum μ μ΄κΈ°ν

console.log(result);
