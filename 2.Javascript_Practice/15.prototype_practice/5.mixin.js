//오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
//하지만! 여러개의 함수들을 상속하고 싶다!
//Mixin!
const play = {
  play: function () {
    console.log(`${this.text} 놀아요`);
  },
};
const sleep = {
  sleep: function () {
    console.log(`${this.text} 자요`);
  },
};

function Dog(text) {
  this.text = text;
}

//Dog prototype 에 sleep 오브젝트 와 play오브젝트 를 넣기
Object.assign(Dog.prototype, sleep, play);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(text) {
    super();
    this.text = text;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
tiger.play();
tiger.sleep();
