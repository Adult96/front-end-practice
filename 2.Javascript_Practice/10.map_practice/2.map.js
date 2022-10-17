//MDN Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map([
  ['key1', '🍎'],
  ['key2', '🥝'],
]);
console.log(map);
//사이즈 확인
console.log(map.size);
//존재하는지 확인
console.log(map.has('🍎')); //false key로 확인해야한다
console.log(map.has('key1'));
//순회
map.forEach((value, key) => console.log(value, key));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//찾기
console.log(map.get('key1'));

//추가
map.set('key3', '🍑');
console.log(map);
//삭제
map.delete('key3');
console.log(map);

//전부삭제
map.clear();
console.log(map);

// map과 오브젝트와의 큰 차이점? map에서는 다양한 메소드를 쓸수있다
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]); //{ name: 'milk', price: 10, description: '맛있는 우유' } 오브젝트는 동적으로 접근가능
console.log(map2[key]); //undefined
console.log(map2.get(key));
