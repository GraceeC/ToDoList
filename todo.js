//global scope
const listElement = document.querySelector("#toDoList");
//function for a new li & checkbox
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const box = document.createElement("input");
  box.type = "checkbox";
  li.appendChild(box);
  li.appendChild(textNode);
  listElement.appendChild(li);
}
//removing li by checkbox
function removeLi(){
  const removeLi = document.getElementById('toDoList');
  const parent = removeLi.parentNode;
  parent.removeChild(removeLi);
}
