function add() {
  var inputToDo = document.getElementById('inputToDo');
  var li = document.createElement("li");
  var textNode = document.createTextNode(inputToDo.value);
  li.appendChild(textNode);
  document.getElementById("toDoList").appendChild(li);
}
function removeLi(){
 const removeLi = document.getElementById('toDoList');
 const parent = removeLi.parentNode;
 parent.removeChild(removeLi);
}

