function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('에러 발생'));
  // return Promise.resolve(`🌴 => 🐔`);
}
getChicken() //
  // .catch((error) => {console.log(error.name); return'🐔';})
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
