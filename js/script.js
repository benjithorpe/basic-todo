"use strict";

const addItemBtn = document.querySelector("[data-add-item-button]");
const allTodoItems = document.querySelector("[data-todo-list]");
const itemTemplate = document.querySelector("[data-todo-item]");

addItemBtn.addEventListener('click', () => {
  const userInput = document.querySelector("[data-input-field]");
  // Do nothing if no data is entered
  if (!userInput.value.trim()) return;

  const todoItem = itemTemplate.content.cloneNode(true);

  todoItem.querySelector("span.content").textContent = userInput.value;
  const deleteBtn = todoItem.querySelector("button.delete");
  deleteBtn.addEventListener('click', () => deleteBtn.parentElement.remove());

  allTodoItems.append(todoItem);  // Add item to the list
  userInput.value = "";  // Clear the input field
});
