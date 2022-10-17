const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const img = document.querySelector('img');
const tag = document.querySelector('.tag');
const imgRect = img.getBoundingClientRect();
const imgRectX = imgRect.width / 2;
const imgRectY = imgRect.height / 2;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  tag.textContent = `${x}px , ${y}px`;

  horizontal.style.transform = `translateY(${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  img.style.transform = `translate(${x - imgRectX}px, ${y - imgRectY}px)`;
  tag.style.transform = `translate(${x}px, ${y}px) `;
});

// 만약 이미지의 getBoundingClientRect의 height와 width가 0으로 나올때는 html에서 아직 이미지를 다운받지 않음 그러므로

// 아래와같이 load동작이 완료될때 이벤트를 등록해주면됨

// addEventListener('load',()=>{
//   const imgRect = img.getBoundingClientRect();
//   const imgRectX = imgRect.width / 2;
//   const imgRectY = imgRect.height / 2;

//   document.addEventListener('mousemove', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     tag.textContent = `${x}px , ${y}px`;

//     horizontal.style.transform = `translateY(${y}px)`;
//     vertical.style.transform = `translateX(${x}px)`;
//     img.style.transform = `translate(${x - imgRectX}px, ${y - imgRectY}px)`;
//     tag.style.transform = `translate(${x}px, ${y}px) `;
//   });
// })
