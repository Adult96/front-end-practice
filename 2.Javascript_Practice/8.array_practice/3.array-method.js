//배별의 함수들
//배열 자체를 변경하는지 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇', '🍑'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //true 배열값이 있는지확인
console.log(Array.isArray({})); //false 배열값이 있는지확인

//특정한 아이템의 위치를 찾을때

console.log(fruits.indexOf('🍎')); // 1

//배열안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🍎')); // true

//추가-제일뒤
let length = fruits.push('😁'); //배열 자체를 수정,업데이트
console.log(length); //.push = 새로운 인자를 추가하고 length를 반환해줌

//추가-제일앞
length = fruits.unshift('😁'); //배열 자체를 수정,업데이트
console.log(length); //.unshift = 새로운 인자를 추가하고 length를 반환해줌

//제거 - 제일뒤
let lastItem = fruits.pop(); //배열 자체를 수정,업데이트
console.log(fruits);
console.log(lastItem); //제거한 인자를 반환함
//제거 - 제일앞

lastItem = fruits.shift(); //배열 자체를 수정,업데이트
console.log(fruits);
console.log(lastItem); //제거한 인자를 반환함

//중간에 추가 또는 삭제 문자열을 잘라서 배열로
const deleted = fruits.splice(1, 1); //(시작할 인텍스, 삭제할 갯수)
console.log(fruits);
console.log(deleted); //제거한 인자를 배열 형태로 반환함

fruits.splice(1, 0, '🍎', '🍓'); //(시작할 인텍스, 삭제할 갯수 ,추가,추가)
console.log(fruits);

//잘라진 새로운 배열을 만드는 API
let newArr = fruits.slice(0, 2); // (시작인덱스, 갯수) 원본은 변하지않고 자른 배열이 생성
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1); // (시작인덱스, 갯수) 원본은 변하지않고 자른 배열이 생성
console.log(newArr);

//여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr3.reverse());

console.clear();
//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [1, 2, 3, 4, [5, 6, [1, 2, 3]], 7];
console.log(arr.flat()); //기본적으로 플랫은 1단계 배열 가지만 펴줌
console.log(arr.flat(2)); //2를 넣으면 2단계 중첩 배열까지 펴줌
arr = arr.flat(2);
console.log(arr);

//특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('s', 1);
console.log(arr);

//배열을 문자열로 합하기

let text = arr.join();
console.log(text);

text = arr.join(''); //,로 문자열을 합하는데 다른것으로 합하고 싶을때
console.log(text);
text = arr.join('/');
console.log(text);
