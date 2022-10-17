//프로토타입을 베이스로한 프로그래밍

//객체지향 프로그래밍의 장점 상속을 통한 코드의 재사용성

//생성자 함수를 통한 객체를 만들수 있는 템플릿
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}
// 프로토 타입 레벨의 printName이라는 함수
Animal.prototype.printName = function () {
  console.log(`${this.name}${this.emoji}`);
};

//Dog라는 생성자 함수
function Dog(name, emoji, owner) {
  // super(name,emoji); //class에서 super를 호출하는것과
  Animal.call(this, name, emoji); //생성자 함수에서 부모의 속성을 호출하는것과 같다
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype); //dog의 프로토 타입은 기본적으로 Object프로토 타입으로 되어있다
Dog.prototype = Object.create(Animal.prototype); //dog의 프로토 타입을 Object.create 메소드를 이용해서 Animal의 프로토타입으로 바꾼다

Dog.prototype.play = function () {
  console.log('같이 놀자');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = function () {
  console.log('사냥하자');
};

const dog1 = new Dog('멍멍', '🐕', '성인');
dog1.play();
dog1.printName();

const tiger1 = new Tiger('호랑이', '🐯');
tiger1.hunt();
tiger1.printName();

console.log(dog1 instanceof Dog); //true    어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
console.log(dog1 instanceof Animal); //true 어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
console.log(dog1 instanceof Tiger); //false 어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
console.log(tiger1 instanceof Dog); //false 어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
console.log(tiger1 instanceof Animal); //true 어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
console.log(tiger1 instanceof Tiger); //true  어떤 클래스(생성자 함수)를 사용하는지 어떤 프로토 타입을 상속하는지 확인가능
