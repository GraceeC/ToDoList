//global scope
const list = document.getElementById("toDoList");

//cretaing a new li & checkbox element
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const list = document.createElement('input');
  checkbox.type = "checkbox";
  li.appendChild(textNode,checkbox);
  document.getElementById("toDoList").appendChild(li, list);
}
//checkbox event listener 
function checkbox(ev){
list.addEventListener("cick", "checkbox");
document.getElementById(toDoList);
}
//removing li by checkbox
function removeLi(){
 const removeLi = document.getElementById('toDoList');
 const parent = removeLi.parentNode;
 parent.removeChild(removeLi);
}
