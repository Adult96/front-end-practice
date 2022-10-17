//주어진 숫자 만큼 0부터 순화하는 함수
//순회하면서 주어진 특정한 일을 수행해야함
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
//hint function iterate(max,action)

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
  return;
}
function text(num) {
  console.log(num);
}

function textResultDouble(num) {
  console.log(num * 2);
}
iterate(5, text);
console.log('-------------------------------');
iterate(5, textResultDouble);
console.log('-------------------------------');
iterate(5, (num) => console.log(num));
console.log('-------------------------------');
iterate(5, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('3초뒤 실행됨');
}, 3000);
