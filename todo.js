//global scope
const list = document.getElementById("toDoList");

//function for a new li & checkbox
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const list = document.createElement("li");
  const box = document.createTextNode(checkbox);
  console.log(box);
  box.type = "checkbox";
  li.appendChild(textNode,checkbox);
  document.getElementById("toDoList").appendChild(li, list);
}

//checkbox event listener 
function checkbox(){
  const box = document.getElementById("toDoList");
  box.addEventListener("click", checkbox);
}

//removing li by checkbox
function removeLi(){
 const removeLi = document.getElementById('toDoList');
 const parent = removeLi.parentNode;
 parent.removeChild(removeLi);
}
