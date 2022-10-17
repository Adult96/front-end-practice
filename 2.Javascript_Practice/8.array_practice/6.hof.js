//Higher Order Funtion

const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//배열을 빙글 빙글 돌면서 원하는것(콜백 함수)을 할때
fruits.forEach((value, index, array) => {
  console.log('-------------------');
  console.log(value);
  console.log(index);
  console.log(array);
});

//조건에 맞는 (콜백 함수) 아이템을 찾을때
//find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🍕', price: 2, owner: { name: 'sungin' } };
const item2 = { name: '🍜', price: 3 };
const item3 = { name: '🍣', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍜');
console.log('-------------------------');
console.log(result);

//findIndex: 제일 먼저 조건에 맞는 인덱스를 반환
result = products.findIndex((index) => index.name === '🍣');
console.log('-------------------------');
console.log(result);

//some:배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 true,false
result = products.some((index) => index.name === '🍣');
console.log('-------------------------');
console.log(result);

//every:배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인 true,false
result = products.every((index) => index.name === '🍣');
console.log('-------------------------');
console.log(result);

//조건에 맞는 모든 아이템들을 새로운 배열로
result = products.filter((index) => index.name === '🍜');
console.log('-------------------------');
console.log(result);

// console.clear();

//map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성
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

//Flatmap : flat메소트와 같이 배열안에 중복 배열을 없앰
//Flatmap : 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
console.log(result); //[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result); // [1, 2, 1, 2, 1,2, 1, 2, 1, 2]

result = ['PARK', 'SUNG', 'IN'].map((item) => item.split(''));
console.log(result); //[ [ 'P', 'A', 'R', 'K' ], [ 'S', 'U', 'N', 'G' ], [ 'I', 'N' ] ]

result = ['PARK', 'SUNG', 'IN'].flatMap((item) => item.split(''));
console.log(result); //['P', 'A', 'R', 'K','S', 'U', 'N', 'G','I', 'N']

//sort 배열의 아이템들을 정렬
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [4, 3, 2, 6, 0, 10];
numbers.sort();
console.log(numbers); //[ 0, 10, 2, 3, 4, 6 ] 주의 해야할점! 숫자도 문자열 순으로 정렬된다

// 리턴값 < 0 a가 앞으로 정렬, 오름차순
numbers.sort((a, b) => a - b); //1번째 비교 a=4,b=3 2번째 비교 a=3,b=2 3번째 비교 a=6,b=0...
console.log(numbers);

// 리턴값 > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => b - a); //1번째 비교 a=4,b=3 2번째 비교 a=3,b=2 3번째 비교 a=6,b=0...
console.log(numbers);

//reduce 배열의 요소들을 접어서 값을 하나로
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0); //0으로 처음에 sum 을 초기화

console.log(result);
//⬇️ 간소화
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); //0으로 처음에 sum 을 초기화

console.log(result);
