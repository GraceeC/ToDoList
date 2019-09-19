 //adding a new todo
 function add() {
    var inputToDo = document.getElementById('inputToDo');
    var ul = document.createElement("ul");
    var inputToDo = document.createTextNode('myList');
    ul.appendChild(inputToDo).value;
    document.getElementById("myList").appendChild(ul).value;
  }

  /*var myList = document.querySelector('ul');
  myList.addEventListener('click');
  function mylist(e){
    if(e.target.tagName === 'li')

  {
    e.target.clasList.toggle('checked');
  }false;
}*/
