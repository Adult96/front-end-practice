//노드,브라우저 API를 활용 비동기적으로 일을 수행
function excute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}

excute();
