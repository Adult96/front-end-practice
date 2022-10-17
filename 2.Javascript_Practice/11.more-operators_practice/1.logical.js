//논리 연산자 Logical Operator
//&& 그리고
//|| 또는
//단축평가:short-circuit evaluation

const obj1 = { name: '😀' };
const obj2 = { name: '😍', owner: 'sungin' };

if (obj1 && obj2) {
  console.log('true');
}

let result = obj1 && obj2;
console.log(result); //{ name: '😍', owner: 'sungin' }

result = obj1 || obj2;
console.log(result); //{ name: '😀' }

//활용예
//조건이 truthy일때, && 무언가를 해야 할 경우 처음 조건이 true이면
//조건이 falshy일때, || 무언가를 해야 할 경우 처음 조건이 false이면
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('app is crush');
  }
  animal.owner = '바뀐 주인';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw Error('주인이 있음');
  }
  animal.owner = '새로운 주인';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); //{ name: '😀' }
console.log(obj2); //{ name: '😍', owner: '바뀐 주인' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undifined안 경우를 확인할때
let item; //= { price: 1 };
const price = item && item.price;
console.log(price);

//기본값을 설정
//falshy한 경우 설정(할당) 0,-0,null,undifine,''
function print(message) {
  const text = message || '메세지가 없음';
  console.log(text);
}
print();
print(''); //빈 문자열을 넣어도 '메세지가 없음'이 출력됨

function printDefalt(message = '메세지 없음') {
  console.log(message);
}
printDefalt();
printDefalt(''); //defalt가 있어도 빈 문자열을 넣으면 아무값도 출력이 안됨
