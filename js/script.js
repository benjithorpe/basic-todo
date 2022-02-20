"use strict";

const addItemBtn = document.querySelector("[data-add-item-button]");
const allTodoItems = document.querySelector("[data-todo-list]");
const itemTemplate = document.querySelector("[data-todo-item]");

// localStorage.clear()
let localTodos = localStorage.getItem("todos");  // Get items from localStorage
localTodos = localTodos ? JSON.parse(localTodos) : [];
localTodos.forEach(element => allTodoItems.append(buildItem(element)));

const getInput = () => document.querySelector("[data-input-field]");
const isValidInput = () => getInput().value.trim() ? true : false;
// Save data to localStorage
const saveToStorage = () => localStorage.setItem("todos", JSON.stringify(localTodos));
const deleteItem = (item) => {
  // Remove the deleted item from localStorage and UI
  localTodos.splice(localTodos.indexOf(item), 1);
  localTodos = [...localTodos];  // Update the todo list
};

function buildItem(element) {
  const todoItem = itemTemplate.content.cloneNode(true);

  todoItem.querySelector("span.content").textContent = element;
  const deleteBtn = todoItem.querySelector("button.delete");
  // Add delete functionality to item created
  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.remove();
    deleteItem(element);
    saveToStorage();
  });

  return todoItem;
}

function addItemAndSaveToStorage() {
  allTodoItems.append(buildItem(getInput().value));
  // ES6 spread syntax
  localTodos = [...localTodos, getInput().value];
  saveToStorage();
}

addItemBtn.addEventListener('click', () => {
  if (isValidInput()) addItemAndSaveToStorage();
  getInput().value = "";  // Clear the input field
});
