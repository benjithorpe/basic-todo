var todoList = document.querySelectorAll('#todos ul li');
var todoListParent = document.querySelector('#todos ul');
const addBtn = document.querySelector('button');
var userInput = document.querySelector('input');

addBtn.addEventListener('click', function(){
  // checks if user has enter a value
  if(userInput.value.trim() !== ""){
    // create a new list tag
    var newItem = document.createElement("li");

    // add the user input in the tag
    newItem.innerText = userInput.value;

    // add the tag to the ul
    todoListParent.append(newItem);
    userInput.value = "";  // reset the input value
  }
});
