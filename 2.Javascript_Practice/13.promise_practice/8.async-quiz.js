function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
  // return Promise.resolve('🐔');
}
//비주얼 스튜디오 코드 자동 변환
async function getFriedChicken() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
getFriedChicken().then(console.log());

//내가 짠 코드
async function result() {
  const chicken = await getChicken().catch(() => '🐔');
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

result().then(console.log);
