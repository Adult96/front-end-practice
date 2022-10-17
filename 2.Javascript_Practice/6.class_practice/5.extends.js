//MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class

// class Tiger{
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자');
//   }
//   sleep(){
//     console.log('잔다');
//   }
// }
// class Dog{
//   constructor(color){
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자');
//   }
//   sleep(){
//     console.log('잔다');
//   }
//   play(){
//     console.log('놀자');
//   }
// }
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {
  play() {
    console.log('놀자');
  }
}

class Dog extends Tiger {
  constructor(color, ownerName) {
    super(color); //생성자에서 부모 클래스의 컬러를 받아와야한다
    this.ownerName = ownerName;
  }
  //오버라이딩 overriding
  eat() {
    super.eat(); //부모 클래스의 eat함수를 받아오기
    console.log('강아지가 먹는다!');
  }
}

const tiger = new Tiger('yello');
const dog = new Dog('red', 'parksungin');
console.log(dog);
tiger.play();
dog.eat();
