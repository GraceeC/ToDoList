//global scope
const list = document.querySelector("#toDoList");
// function is ran when a new to do is entered
function add() {
  //getting input value
  const inputToDo = document.getElementById("inputToDo");
  //stopping input from entering an empty to do
  if (inputToDo.value === " ")
  return;
  //creating a new li
  const li = document.createElement("li");
  console.log("'li' created");
  //creating text of new item
  const textNode = document.createTextNode(inputToDo.value);
  //creating a new checkbox for each to do
  const box = document.createElement("input");
  console.log("clicked");
  box.type = "checkbox";
  //btn to delete to do
  const btn = document.createElement("input");
  btn.setAttribute("type","checkbox");
  document.body.appendChild(btn);
  //adding a new checkbox for each item
  li.appendChild(box);
  li.appendChild(textNode);
  ulList.appendChild(li);
  //clearing input value after item has been submitted
  document.getElementById("inputToDo").value = "";
}
//event listener to strike out item
ulList.addEventListener("click", Strike);
//function to strike
function Strike(e) {
  line = document.getElementsByClassName("item");
  console.log("box is clicked");
  e.target.parentNode.style.textDecoration = "line-through";
}
function removeLi(){

}
