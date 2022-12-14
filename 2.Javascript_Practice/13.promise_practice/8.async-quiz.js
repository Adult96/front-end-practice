function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error('can not find π'));
  // return Promise.resolve('π');
}
//λΉμ£ΌμΌ μ€νλμ€ μ½λ μλ λ³ν
async function getFriedChicken() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = 'π';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}
getFriedChicken().then(console.log());

//λ΄κ° μ§  μ½λ
async function result() {
  const chicken = await getChicken().catch(() => 'π');
  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);
  return friedEgg;
}

result().then(console.log);
