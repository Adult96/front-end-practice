//순회가 가능한 object

//[Symbol.iterator](): Iterator{next(): {value,done}};
//0부터 10 이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
//0,1,2,3,...,9
//0,2,4,8...,18

function multiple(max, numValue, callback) {
  return {
    [Symbol.iterator]: () => {
      let num = numValue;
      return {
        next() {
          return {
            value: callback(num++),
            done: num > max,
          };
        },
      };
    },
  };
}
for (const num of multiple(10, 0, (n) => n * 2)) {
  console.log(num);
}
