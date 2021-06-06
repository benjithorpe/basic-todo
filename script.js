const addBtn = document.getElementById('addBtn');
const ul = document.getElementById("todos");
let deleteButtons = ul.getElementsByClassName('deleteBtn');

addBtn.addEventListener('click', () => {
  let userInput = document.getElementById('input');

  if (!userInput.value.trim()) {
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = '<button type="button" class="deleteBtn">X</button>';
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";

  addDeleteActionOnItems(deleteButtons);
});

const addDeleteActionOnItems = (list) => {
  for (const todo of deleteButtons) {
    todo.addEventListener('click', () => todo.parentElement.remove());
  }
};
