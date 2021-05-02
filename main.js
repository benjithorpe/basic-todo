const todoListParent = document.querySelector('#todos ul');
const addBtn = document.querySelector('button');
var userInput = document.querySelector('input');

addBtn.addEventListener('click', function(){
  // checks if user has enter a value
  if(userInput.value.trim()){
    var newListItem = document.createElement("li"); // create a new list element
    let userText = document.createTextNode(userInput.value);

    newListItem.appendChild(userText);  // add the user input in the li element
    todoListParent.appendChild(newListItem);  // add the list tag to the ul element
    userInput.value = "";  // reset the input value
    addEventToItem();
  }
});


function addEventToItem(){
  var todoList = document.querySelectorAll('li');

  for(let count = 0; count < todoList.length; count++){
    todoList[count].addEventListener('click', function(){
      todoListParent.removeChild(this);
    });
  }
}
