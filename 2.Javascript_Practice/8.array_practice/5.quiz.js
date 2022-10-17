// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function changeStrawberry(input, serchEmoji, changeEmoji) {
  const creatArray = Array.from(input);
  for (let i = 0; i < creatArray.length; i++) {
    if (creatArray[i] === serchEmoji) {
      creatArray[i] = changeEmoji;
    }
  }
  return creatArray;
}
const input = ['🍌', '🍓', '🍇', '🍓'];
const result = changeStrawberry(input, '🍓', '🥝');
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function findArrayToKiwi(kiwiArray, kiwi) {
  let cnt = 0;
  for (let i = 0; i < kiwiArray.length; i++) {
    if (kiwiArray[i] === kiwi) {
      cnt++;
    }
  }
  return cnt;
}

const kiwiArray = ['🍌', '🥝', '🍇', '🥝'];
console.log(findArrayToKiwi(kiwiArray, '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function includesToArray(array1, array2) {
  let plus = [];
  for (let i = 0; i < array1.length; i++) {
    const findSameFruits = array2.includes(array1[i]);
    if (findSameFruits) {
      plus.push(array1[i]);
    }
  }
  return plus;
}

const array1 = ['🍌', '🥝', '🍇'];
const array2 = ['🍌', '🍓', '🍇', '🍓'];

const result2 = includesToArray(array1, array2);
console.log(result2);
