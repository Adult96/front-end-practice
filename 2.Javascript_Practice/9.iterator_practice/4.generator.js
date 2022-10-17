// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return {
//           value: num++ * 2,
//           done: num > max,
//         };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      //retrun은 바로 리턴하지만
      //yield는 사용자가 원할때까지 기다렸다가 달라고 할때마다 전달해줌
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); //제너레이터를 리턴시키면 함수가 끝남
multiple.throw('Error!'); //에러를 던지면 캣치에서 에러를 잡아냄

next = multiple.next();
console.log(next.value, next.done);
