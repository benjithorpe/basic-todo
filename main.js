const addBtn = document.querySelector('button');
const ul = document.querySelector("#todos ul");
let lists = ul.getElementsByTagName('li');

// Add items to the list
addBtn.addEventListener('click', function(){
  const userInput = document.querySelector('input').value;

  if(!userInput){
    return
  }
  const li = document.createElement('li');
  li.innerHTML = '<img src="delete.svg">'; // add the trash can image

  li.appendChild(document.createTextNode(userInput));
  ul.appendChild(li);

  update();
  console.log(lists.length);
  console.log(lists);
});


function update(){
  // Delete items from the list
  for (var i = 0; i < lists.length; i++){
    const deleteBtn = lists.item(i).querySelector('img');

    deleteBtn.addEventListener('click', function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
}
