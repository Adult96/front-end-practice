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

async function fetchFruits() {
  //async๋ฅผ ์ฌ์ฉํ๋ฉด ํจ์์์์ ๋น๋๊ธฐ์ ์ธ ์ฝ๋๋ฅผ ๋๊ธฐ์ ์ผ๋ก ์๋์ํด
  const banana = await getBanana(); // Promise ๋ฅผ returnํ๋ ํจ์ ํธ์ถ์ ํ ๋ await๋ผ๋ ํค์๋๋ฅผ ์จ์ ๊ธฐ๋ค๋ ธ๋ค๊ฐ Promise๊ฐ์ด result๊ฐ ๋๋ฉด ๊ทธ๊ฐ์ ๋ฐํ
  const apple = await getApple();
  return [apple, banana]; //๊ฐ์ Promise๋ฅผ์จ์ ๋ฐํํ์ง ์์๋ async๋ฅผ ์ฐ๊ธฐ๋๋ฌธ์ Promiseํ์์ผ๋ก ๋ฐํํจ
}

fetchFruits().then(console.log);
