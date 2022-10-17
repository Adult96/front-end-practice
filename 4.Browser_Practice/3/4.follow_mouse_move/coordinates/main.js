const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const img = document.querySelector('img');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  tag.textContent = `${x}px , ${y}px`;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.style.left = `${x}px`;
});
