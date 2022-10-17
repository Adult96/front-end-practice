'use stict';

let root = document.styleSheets[0].cssRules[0].style;
const mousePos = document.querySelector('.mouse__pos.cross__TL');
document.addEventListener('mousemove', (e) => {
  root.setProperty('--mouse-pos-x', e.clientY + 'px');
  root.setProperty('--mouse-pos-y', e.clientX + 'px');

  mousePos.textContent = `${e.clientX},${e.clientY}`;
});
