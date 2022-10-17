//MDN 객체로 작업하기: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const objName = {
  name: '성인',
  age: 20,
};
//코딩하는 시점에, 정적으로 접근이 확정됨
objName.name;
objName.age;

const objAge = {
  name: '박성인',
  age: 27,
};

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!

function getValue(obj, key) {
  return obj[key];
}

function addKey(obj, key, value) {
  return (obj[key] = value);
}

function deletKey(obj, key) {
  return delete obj[key];
}

console.log(getValue(objName, 'name'));
console.log(getValue(objAge, 'age'));

addKey(objName, 'girlFriend', true);
console.log(objName);
deletKey(objName, 'girlFriend');
console.log(objName);
