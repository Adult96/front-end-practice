//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

//내부 정보를 은닉하고, 공개함수(public, 외부)를 통한 데이터 조작을 위해
//캡슐화와 정보은닉
//클래스 private 필드
//클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
//예전 버전의 자바스크립트에서 클래스 private 필드를 사용하지 못하였기 때문에 closure사용
function makeCounter() {
  let count = 0;
  function increase() {
    //외부에서 increase함수 접근 불가능
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();
console.log('----------------------');

class Counter {
  #count = 0;
  // constructor(count) {
  //   this.#count = count;
  // }
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increase();
counter.increase();
counter.increase();
