//global scope for to do list
const list = document.querySelector("#toDoList");

const listItems = document.querySelector("#ulList");
ulList.addEventListener("click", function(e) {
  console.log("box is clicked");
  if(e.target.parentNode.style.textDecoration ==="line-through"){
  } else{
    e.target.parentNode.style.textDecoration ===" ";
  }
});

const enterButton = document.getElementById('btnEnter');
enterButton.addEventListener("click", function(e) {
  add();
});

const inputToDo = document.getElementById("inputToDo");
inputToDo.addEventListener("keyup",function(e){
  if(event.keyCode === 13){
    e.preventDefault();
    add();
  }
});

// function is ran when a new to do is entered
function add() {
  //getting input value
  const newLiItem = createListItemElement(inputToDo.value);
  //stopping input from entering an empty to do
  if (inputToDo.value.length === 0)
    return false;
  //adding a new checkbox for each item
  ulList.appendChild(newLiItem);
  //clearing input value after item has been submitted
  document.getElementById("inputToDo").value = "";
}
function createListItemElement(inputToDoValue){
  const li = document.createElement("li");
  console.log("'li' created");
   //creating text of new item
   const textNode = document.createTextNode(inputToDoValue);
   li.appendChild(textNode);
  //creating a new checkbox for each to do

  const box = document.createElement("input");
  console.log("clicked");
  box.type = "checkbox";
  //adding a new checkbox
  li.appendChild(box);
 //btn to delete to do
 const deleteBtn = document.createElement("input");
 deleteBtn.setAttribute = ("type", "button");
 deleteBtn.value = 'x';
 deleteBtn.id="btn";
 deleteBtn.addEventListener('click', function(e){
   console.log("btn clicked");
   li.style = 'display: none;';
 });
 li.appendChild(deleteBtn);


return li;
  }
