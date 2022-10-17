//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    //resolve는 then에 전달 ,reject는 catch에 전달
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작다'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}
runInDelay(-1)
  .then(() => console.log('끝났다')) //실행이 되었을때
  .catch(console.error()) //실행이 되지 않았을때
  .finally(() => console.log('END')); //최종적으로 무조건 호출
