const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const addItemBtn = document.querySelector('.add__item-btn');
const input = document.querySelector('.input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  onAddItem();
});

//del btn 이벤트
items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (e.target.className === 'del__item') {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

let id = 0;
//아이템 추가 함수
function onAddItem() {
  if (!input.value) {
    return input.focus();
  }
  const createItem = document.createElement('li');
  createItem.setAttribute('class', 'item__row');
  createItem.setAttribute('data-id', id);
  createItem.innerHTML = `
    <span class="item__name">${input.value}</span>
    <button class="del__item" data-id="${id}">
      <i class="fa-solid fa-delete-left"></i>
    </button>
  `;
  id++;

  items.appendChild(createItem);
  createItem.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}
