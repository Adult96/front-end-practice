//호이스팅 (Hoisting 끌어 올리다)

//자바스크립트 엔진(번역기,Interpreter)이 코드를 실행하기전 변수,함수,클래스의 선언문을 위로 끌어올림
//변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮김

let a = 1; //값은 상관 안하고 let a;만을 최상단으로 끌어올림

//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
//함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('hello');
}

//변수(let,const)화 클래스는 선언만 호이스팅이 되고,
//초기화는 안됨
//초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
console.log(hi);
let hi = 'hi';
let finc1 = function () {};

const cat = new Cat();
class Cat {}

let x = 1;
{
  console.log(x); //let x의 호이스팅은 되었지만 지역변수 안에있는 x가 x변수를 실행하기전에 초기화가 되지않아서 에러발생
  let x = 2;
}
