//global scope
const list = document.querySelector("#toDoList");
// function is ran when a new to do is entered
function add() {
  //getting input value
  const inputToDo = document.getElementById("inputToDo");
  inputToDo.addEventListener("keyup",function(e){
    if(event.keyCode === 13){
      e.preventDefault();
      document.getElementById("btnEnter").click();
    }
  });
  //stopping input from entering an empty to do
  if (inputToDo.value.length === 0)
    return false;
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
  const deleteBtn = document.createElement("input");
  deleteBtn.setAttribute = ("type", "button");
  deleteBtn.value = 'x';
  deleteBtn.addEventListener('click', function (e) {
    console.log("btn clicked");
    li.style = 'display: none;';
  });
  //adding a new checkbox for each item
  li.appendChild(box);
  ulList.appendChild(li);
  li.appendChild(textNode);
  li.appendChild(deleteBtn);
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
