//비동기 코드를 조금더 깔끔하게 작성하는법
//주어진 seconds(초)가 지나면 callback함수를 호출함
//단,seconds가 0보다 작으면 에러를 던지자
function runInDelay(callback, seconds) {
  if (seconds < 0) {
    throw new Error('value가 0보다 작음');
  }
  if (!callback) {
    throw new Error('callback 값이 없음');
  }

  setTimeout(callback, seconds * 1000);
}

function aa(value) {
  return console.log(value);
}
try {
  runInDelay(() => {
    aa('1');
  }, 3);
} catch (error) {
  console.log('error 발생');
}
