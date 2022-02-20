"use strict";

const addItemBtn = document.querySelector("[data-add-item-button]");
const allTodoItems = document.querySelector("[data-todo-list]");
const itemTemplate = document.querySelector("[data-todo-item]");

// localStorage.clear()
// Get items from localStorage
let localTodos = localStorage.getItem("todos");
localTodos = localTodos ? JSON.parse(localTodos) : [];
localTodos.forEach(element => allTodoItems.append(buildItem(element)));

function buildItem(element) {
  const todoItem = itemTemplate.content.cloneNode(true);

  todoItem.querySelector("span.content").textContent = element;
  const deleteBtn = todoItem.querySelector("button.delete");
  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.remove()
  });

  return todoItem;
}

addItemBtn.addEventListener('click', () => {
  const userInput = document.querySelector("[data-input-field]");
  // Do nothing if no data is entered
  if (!userInput.value.trim()) return;

  allTodoItems.append(buildItem(userInput.value));
  // ES6 spread syntax
  localTodos = [...localTodos, userInput.value];
  userInput.value = "";  // Clear the input field

  // Save data to localStorage
  localStorage.setItem("todos", JSON.stringify(localTodos));
});
