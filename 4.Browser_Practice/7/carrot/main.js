const playBtn = document.querySelector('.play__btn');
const stopBtn = document.querySelector('.stop__btn');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');
const createItem = document.querySelector('.create__item');
const createItemSize = createItem.getBoundingClientRect();
const carrotCnt = document.querySelector('.cnt');
const alertMain = document.querySelector('.alert');
const alertRtyBtn = document.querySelector('.alert__retry-btn');
const timerbox = document.querySelector('.timer');
const messege = document.querySelector('.messege');

const audioBgm = new Audio('sound/bg.mp3');
const audioCarrot = new Audio('sound/carrot_pull.mp3');
const audioBug = new Audio('sound/bug_pull.mp3');
const audioAlert = new Audio('sound/alert.wav');
const audioWin = new Audio('sound/Game_win.mp3');

let id = 0;
let cnt = 0;
let setTime;

function createCarrot() {
  for (let i = 0; i < 10; i++) {
    const posX = randomPosX();
    const posY = randomPosY();

    const createCarrot = document.createElement('div');
    createCarrot.setAttribute('class', 'carrot');
    createCarrot.setAttribute('data-id', id);
    createCarrot.setAttribute('style', `top: ${posY}px; left: ${posX}px`);

    id++;
    createItem.appendChild(createCarrot);
  }
}

function createBug() {
  for (let i = 0; i < 10; i++) {
    const posX = randomPosX();
    const posY = randomPosY();

    const createBug = document.createElement('div');
    createBug.setAttribute('class', 'bug');
    createBug.setAttribute('style', `top: ${posY}px; left: ${posX}px`);

    createItem.appendChild(createBug);
  }
}

function randomPosX() {
  const xPos = Math.floor(Math.random() * (createItemSize.width - 1) + 1);
  return xPos;
}

function randomPosY() {
  const yPos = Math.floor(Math.random() * (createItemSize.height - 1) + 1);
  return yPos;
}

function clickDelCarrot(event) {
  const id = event.target.dataset.id;
  if (event.target.className === 'carrot') {
    document.querySelector(`.carrot[data-id="${id}"]`).remove();
  }
}

function allItemDel() {
  const allCarrot = document.querySelectorAll('.carrot');
  const allbug = document.querySelectorAll('.bug');
  allCarrot.forEach((item) => item.remove());
  allbug.forEach((item) => item.remove());
}

function timer() {
  let time = 10;
  timerbox.textContent = `00:10`;
  setTime = setInterval(() => {
    timerbox.textContent = `00:0${--time}`;
    if (time === 0) {
      clearInterval(setTime);
      audioBgm.pause();
      showAlert('You Lost', 'lose');
      return;
    }
  }, 1000);
}

function showAlert(text, result) {
  alertMain.classList.remove('hidden');
  clearInterval(setTime);
  messege.textContent = text;
  if (result === 'win') {
    audioWin.play();
  } else {
    audioAlert.play();
  }
}

playBtn.addEventListener('click', () => {
  audioBgm.load();
  audioBgm.play();

  playBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  createCarrot();
  createBug();
  timer();
});

stopBtn.addEventListener('click', () => {
  audioBgm.pause();
  audioBgm.load();

  playBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');

  allItemDel();

  cnt = 0;
  carrotCnt.textContent = 0;

  clearInterval(setTime);
  timerbox.textContent = '00:00';
});

createItem.addEventListener('click', (e) => {
  if (e.target.className === 'carrot') {
    audioCarrot.play();

    clickDelCarrot(e);
    carrotCnt.textContent = ++cnt;
    if (cnt === 10) {
      showAlert('You Win!', 'win');
      audioBgm.pause();
    }
  } else if (e.target.className === 'bug') {
    audioBug.play();
    audioBgm.pause();
    showAlert('You Lost', 'lose');
  }
});

alertRtyBtn.addEventListener('click', () => {
  alertMain.classList.add('hidden');
  playBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  allItemDel();
  cnt = 0;
  carrotCnt.textContent = 0;
  timerbox.textContent = '00:00';
});
