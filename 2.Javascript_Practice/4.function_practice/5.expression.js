//함수 선언문 function name(){}
//함수 표현식 const name = function(){}
//화살표 함수 const name = () => {}

let add = function (a, b) {
  //함수 표현식
  return a + b;
};
console.log(add(1, 2));

add = (a, b) => {
  //화살표 함수
  return a + b;
};
//⬇️ 함수 안에 바로 return을 하는 함수면
//  아래와 같이 생략 가능

add = (a, b, c) => a + b + c;

console.log(add(1, 2, 3));

//생성자 함수 cosnt object = ner Function(); //뒤 객체편에서 다룸

//IIFE(Immedicately(즉각적으로)-Invoked(호출) Function Expressions)
(function run() {
  console.log('❤️');
})();
