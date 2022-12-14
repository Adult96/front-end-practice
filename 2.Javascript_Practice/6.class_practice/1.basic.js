//MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class

//객체를 손쉽게 만들수 있는 템플릿
//1.생성자 함수 (오래된 고전적인 방법)
//2. 클래스 (최신)

//클래스 classs
class Fruit {
  //⬇️ 생성자 new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //⬇️ class안에 function을 넣을땐 function을 쓰지 않은다
  display() {
    console.log(`${this.name}:${this.emoji}`);
  }
  //OR
  // display = () => {
  //   console.log(`${this.name}:${this.emoji}`);
  // };
}

//apple은 Fruit 클래스의 인스턴스 이다.
const apple = new Fruit('apple', '🍎');
//orange Fruit 클래스의 인스턴스 이다.
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.name);
console.log(apple.display());

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'sungin' };
