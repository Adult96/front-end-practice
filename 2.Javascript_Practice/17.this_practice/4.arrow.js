//자바스크립트의 함수는 만능 슈퍼맨
//함수처럼 사용, 생성자 함수로 사용(클래스)
//하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고있는 객체)생성됨
const dog = {
  name: 'dog',
  play: function () {
    //객체 안에서 함수 표현식을 사용하는것은 좋지않음 생성자 함수처럼 만들어져서 무거워짐! this 바인딩도 동적으로 됨
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); //이렇게 사용하면 무거워짐
console.log(obj);

//ES6 !!
const cat = {
  name: 'cat',
  play() {
    //객체의 메서드(오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
// const obj1 = new cat.play();//생성자 함수로 사용 ❌
/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능(무거운 프로토 타입을 만들지 ❌)
 * 3. 함수 자체 arguments 가지고있지 않음
 * 4. this에 대한 바인디잉 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this); //화살표 함수는 화살표 함수를 감싸고있는 전역 스코프(글로벌 스코프)의 모듈 정보를 받아온다
};
printArrow();

cat.printArrow = printArrow;
cat.printArrow();
cat.play();
