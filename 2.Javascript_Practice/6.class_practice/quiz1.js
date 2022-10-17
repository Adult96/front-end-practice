//카운터 만들기
//0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
//Counter 클래스 만들기

class Counter {
  #value;
  constructor(num) {
    if (isNaN(num) || num < 0) {
      this.#value = 0;
    } else {
      this.#value = num;
    }
  }

  get value() {
    return this.#value;
  }

  increment() {
    return this.#value++;
  }
}

const counter = new Counter(0); //0은 constructor의 매개변수

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);
