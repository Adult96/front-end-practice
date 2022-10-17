const listInput = document.querySelector('#list__Input');
const listName = document.querySelector('.list__name');
const addBtn = document.querySelector('.add__btn');
const lists = document.querySelector('.lists');
addBtn.addEventListener('click', () => {
  addInput();
});

lists.addEventListener('click', (e) => {
  if (e.target.className === 'list__del') {
    e.target.parentNode.remove();
  }
});

function addInput() {
  if (!listInput.value) {
    return;
  }
  const addList = document.createElement(`div`);
  addList.setAttribute('class', 'list');

  addList.innerHTML = `
    <div class="list__name">${listInput.value}</div>
    <div class="list__del">
      <i class="fa-solid fa-delete-left"></i>
    </div>
    `;
  lists.append(addList);
  listInput.value = null;
}

function enterInput() {
  if (event.keyCode == 13) {
    addInput();
  }
}
