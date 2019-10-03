//adding a new LI element
function add() {
  const inputToDo = document.getElementById('inputToDo');
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  li.appendChild(textNode);
  document.getElementById("toDoList").appendChild(li);
}
//creating a new checkbox
function checkbox(){
  const inputToDo = document.getElementById('inputToDo');
  const ul = document.createElement(checkb);
  const textNode = document.createTextNode(inputToDo.value);
  ul.appendChild(textNode);
  document.getElementById("toDoList").appendChild(li);
}
//removing li by checkbox
function removeLi(){
 const removeLi = document.getElementById('toDoList');
 const parent = removeLi.parentNode;
 parent.removeChild(removeLi);
}
