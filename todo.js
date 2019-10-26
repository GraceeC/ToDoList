//global scope
const list = document.querySelector("#toDoList");
//function for a new li & checkbox
function add() {
  const inputToDo = document.getElementById("inputToDo");
  if (inputToDo.value === " ") return;
  const li = document.createElement("li");
  const textNode = document.createTextNode(inputToDo.value);
  const box = document.createElement("input");
  console.log("clicked");
  box.type = "checkbox";
  li.addEventListener("click", removeLi);
  li.appendChild(box);
  li.appendChild(textNode);
  list.appendChild(li);
  document.getElementById("inputToDo").value = "";
}
function removeLi(e) {
  const liElement = e.target.parentNode;
  console.log("liElement");
  if (e.target === liElement) {
    box.style.textDecoration = "line-through";
    list.removeChild(liElement);
  }
}

