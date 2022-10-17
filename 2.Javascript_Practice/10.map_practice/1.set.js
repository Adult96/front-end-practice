//MDN Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

//Set
const set = new Set([1, 2, 3]);
console.log(set);

//set의 사이즈를 확인
console.log(set.size);
// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));
//순회 iterable
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//추가 set은 중복이 안됨
set.add(6);
console.log(set);
set.add(6);
console.log(set);

//삭제
set.delete(6);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

//오브젝트 셋트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//퀴즈 shallow copy가 된다
obj1.price = 10;
objs.add(obj1);
console.log(objs);

//퀴즈 //obj2와 obj3의 프로퍼티가 같아도 메모리 주소가 다르기 때문에 objs에 추가가 된다
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 2;
console.log(objs);
