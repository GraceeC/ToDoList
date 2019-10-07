//global scope
const list = document.querySelectorAll("toDoList");
//function for a new li & checkbox
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const box = document.createElement("input");
  box.type = "checkbox";
  li.appendChild(box);
  li.appendChild(textNode);
  list.appendChild(li);
}
//checkbox event listener 
document.querySelector('toDoList');
list.addEventListener('click', checkbox(e)); {
box.removeChild(e.target);
}
//removing li by checkbox
function removeLi(){
  const removeLi = document.getElementById('toDoList');
  const parent = removeLi.parentNode;
  parent.removeChild(removeLi);
}
