//global scope
const list = document.querySelector("#toDoList");
//function for a new li & checkbox
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const box = document.createElement("input");
  console.log("clicked");
  box.type = "checkbox";
  li.addEventListener('click', removeLi);
  li.appendChild(box);
  li.appendChild(textNode);
  list.appendChild(li);
  document.getElementById('inputToDo').value="";
}
//stopping to do item from being an empty to do item
function emptyInput(){
  if (inputToDo.value === " " ){
alert("are you sure?");
  }
 
}
//removing li by checkbox
function removeLi(e){
  console.log('event target:', e.target);
  const liElement = e.target.parentNode;
  list.removeChild(liElement);
}
