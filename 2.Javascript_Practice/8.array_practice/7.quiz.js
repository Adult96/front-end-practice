// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeStrawberry(input, serchEmoji, changeEmoji) {
  return input.map((value) => (value === serchEmoji ? changeEmoji : value));
}

const input = ['🍌', '🍓', '🍇', '🍓'];
const result = changeStrawberry(input, '🍓', '🥝');
console.log(result);

//---------------------------------------------

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const kiwiArray = ['🍌', '🥝', '🍇', '🥝', '🥝', '🥝', '🥝', '🥝'];

function findArrayToKiwi(kiwiArray, kiwi) {
  return kiwiArray.filter((value) => value === kiwi).length;
}
console.log(findArrayToKiwi(kiwiArray, '🥝'));

//---------------------------------------------

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function includesToArray(array1, array2) {
  return array1.filter((value) => array2.includes(value));
}

const array1 = ['🍌', '🥝', '🍇'];
const array2 = ['🍌', '🍓', '🍇', '🍓'];

const result2 = includesToArray(array1, array2);
console.log(result2);

// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const numsResult =
  nums.reduce((sum, value) => (value > 5 ? (sum += value) : (sum += 0)), 0) /
  nums.filter((value) => value > 5).length;
console.log(numsResult);

const numsResult3 = nums
  .filter((filterArray) => filterArray > 5)
  .reduce((sum, value, _, array) => sum + value / array.length, 0);
console.log(numsResult3);
