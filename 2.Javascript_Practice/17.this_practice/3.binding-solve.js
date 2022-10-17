//동적 바인딩을 정적으로 바꾸는법

function Cat(name) {
  this.name = name;
  //2. arrow 함수를 사용 : arrow함수는 렉시컬 환경에서의 this를 기억함
  //화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // this.printName = function () {
  //   console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  // };
  //1.bind 함수를 이용해 수동적으로 바인딩 해주기
  // this.printName = this.printName.bind(this);
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
