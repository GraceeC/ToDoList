const list = document.querySelector("#toDoList");

function add() {
  const inputToDo = document.getElementById("inputToDo");
  if (inputToDo.value === " ") return;
  const li = document.createElement("li");
  console.log("'li' created");
  const btn = document.createElement("button");
  document.body.appendChild(btn);
  const textNode = document.createTextNode(inputToDo.value);
  const box = document.createElement("button");
  const boxText = document.createTextNode("x");
  console.log("clicked");
  box.type = "checkbox";
  box.appendChild(boxText);
  document.body.appendChild(box);
  li.addEventListener("click", Strike);
  li.appendChild(box);
  li.appendChild(textNode);
  ulList.appendChild(li);
  document.getElementById("inputToDo").value = " ";
}
//event listener for strike through affect
function Strike(e) {
  line = document.getElementsByClassName("item");
  console.log("box is clicked");
  e.target.parentNode.style.textDecoration = "line-through";
}
