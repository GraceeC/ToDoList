//global scope
const list = document.querySelector("#toDoList");
//function for a new li & checkbox
function add() {
  //getting input value
  const inputToDo = document.getElementById("inputToDo");
  //stopping an empty input from being inserted
  if (inputToDo.value === " ") return;
  //creating a new li element
  const li = document.createElement("li");
  //ctreating text
  const textNode = document.createTextNode(inputToDo.value);
  //creating a new box attribute
  const box = document.createElement("input");
  console.log("clicked");
  box.type = "checkbox";
  //
  li.addEventListener("click", removeLi);
  //appending a new checkbox for each item
  li.appendChild(box);
  //appending an li for each item
  li.appendChild(textNode);
  ulList.appendChild(li);
  //clearing input
  document.getElementById("inputToDo").value = "";
}

//event listener for strike through affect
list.addEventListener("click", Strike);
//function to strike item
function Strike(e) {
  const line = e.traget.nextSibiling;
  if (e.targte.checked) {
    line.style.textDecoration = "line-through";
  }

  // deletes li's
  function removeLi(e) {
    console.log("event target:", e.target);
    const liElement = e.target.parentNode;
    console.log("removeLi() function was run");
    list.removeChild(liElement);
  }
}
