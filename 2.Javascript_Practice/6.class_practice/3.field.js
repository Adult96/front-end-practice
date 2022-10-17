//접근 제어자 - 캡슐화
//private(#)(외부에서 접근이 불가능 내부에서만 호출가능),public(기본)(외부에서 볼수있고 접근이 가능),protected(상속된 자식에서만 접근이 가능)
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}:${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');

console.log(apple);
apple.display();
