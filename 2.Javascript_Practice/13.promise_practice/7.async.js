function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 2000);
  });
}
//사과 바나나 같이 가져오기
function getOrange() {
  return Promise.reject(new Error('no Orange'));
}

async function fetchFruits() {
  //async를 사용하면 함수안에서 비동기적인 코드를 동기적으로 작동시킴
  const banana = await getBanana(); // Promise 를 return하는 함수 호출을 할땐 await라는 키워드를 써서 기다렸다가 Promise값이 result가 되면 그값을 반환
  const apple = await getApple();
  return [apple, banana]; //값을 Promise를써서 반환하지 않아도 async를 쓰기때문에 Promise형식으로 반환함
}

fetchFruits().then(console.log);
