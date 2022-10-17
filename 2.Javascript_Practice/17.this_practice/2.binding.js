//this 바인딩
//자바,C#,C++ 대부분의 객체지향 프로그래밍 언어에서는
//this는 항상 자신의 인스턴스 자체를 가리킴!
//정적으로 객체가 만들어 지는 시점에 this가 결정됨!
//하지만, 자바스크립트 에서는 누가 호출하냐에 따라서 this가 달라짐!
//즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}
const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName; // 강아지 printName함수에 고양이 printName함수를 할당했을때
dog.printName(); //출력해보면 고양이의 이름을 출력한다옹: 멍멍 멍멍으로 즉 동적으로 출력이 된다 다른 언어 에서는 할당을 해도 '냐옹' 즉 정적으로 나온다
cat.printName();

function printMonitor(printName) {
  console.log('모니터를 준비하고 전달된 콜백을 실행');
  printName();
}
printMonitor(cat.printName);
