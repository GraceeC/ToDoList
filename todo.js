function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  li.appendChild(textNode);
  const box = document.createElement('checkBox');
  box.document.getElementById('checkBox')
  document.getElementById("toDoList").appendChild(li);
  box.appendChild(document.createTextNode('x'));
}
function removeLi(){
 const removeLi = document.getElementById('toDoList');
 const parent = removeLi.parentNode;
 parent.removeChild(removeLi);
}

