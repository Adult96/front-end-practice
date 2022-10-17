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
getBanana() //
  .then((banana) => getApple().then((apple) => [apple, banana]))
  .then(console.log);

//Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getApple(), getBanana()]) //
  .then((fruits) => console.log('all', fruits));

//Promise.race주어진 Promise중에 제일 빨리 수행된것이 이김
Promise.race([getApple(), getBanana()]) //
  .then((fruit) => console.log('race', fruit));

//에러를 캣치
Promise.all([getApple(), getBanana(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
//에러가 떠도 에러까지 정보를 다 받아온다
Promise.allSettled([getApple(), getBanana(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
