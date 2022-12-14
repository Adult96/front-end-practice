function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 2000);
  });
}
//์ฌ๊ณผ ๋ฐ๋๋ ๊ฐ์ด ๊ฐ์ ธ์ค๊ธฐ
function getOrange() {
  return Promise.reject(new Error('no Orange'));
}
getBanana() //
  .then((banana) => getApple().then((apple) => [apple, banana]))
  .then(console.log);

//Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
Promise.all([getApple(), getBanana()]) //
  .then((fruits) => console.log('all', fruits));

//Promise.race์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์ด๊น
Promise.race([getApple(), getBanana()]) //
  .then((fruit) => console.log('race', fruit));

//์๋ฌ๋ฅผ ์บฃ์น
Promise.all([getApple(), getBanana(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
//์๋ฌ๊ฐ ๋ ๋ ์๋ฌ๊น์ง ์ ๋ณด๋ฅผ ๋ค ๋ฐ์์จ๋ค
Promise.allSettled([getApple(), getBanana(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
