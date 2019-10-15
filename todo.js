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
  li.appendChild(box);
  li.appendChild(textNode);
  list.appendChild(li);
}

list.addEventListener('click', removeLi) ;{
  list.removeChild(list.childNodes[0]);

//removing li by checkbox
function removeLi(){
  const removeLi = document.getElementById('toDoList');
  const parent = removeLi.removeChild;
  parent.removeChild(removeLi);
}
}
