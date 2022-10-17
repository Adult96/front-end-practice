// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']

const result = [...new Set(fruits)];
console.log(result);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function setCommonArray(set1, set2) {
  return [...set1].filter((value) => set2.has(value));
}
console.log(setCommonArray(set1, set2));
