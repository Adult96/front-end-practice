//static 정적 프로퍼티, 키워드

class Fruit {
  static MAX_FRUIT = 4;

  //⬇️ 생성자 new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRandomFruit() {
    //클래스 레벨의 메서드에서는 this를 참조할 수 없음(fruit이 templet(비어있기)이기때문)
    return new Fruit('banana', '🍌');
  }

  //⬇인스턴스 레벨의 메서드
  display() {
    console.log(`${this.name}:${this.emoji}`);
  }
}
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUIT);

//apple은 Fruit 클래스의 인스턴스 이다.
const apple = new Fruit('apple', '🍎');
//orange Fruit 클래스의 인스턴스 이다.
const orange = new Fruit('orange', '🍊');

Math.pow();
Number.isFinite(1);
