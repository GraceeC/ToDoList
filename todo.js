    function add() {
    var item =document.getElementById("input").nodeValue;
    var ul = document.getElementById('todo');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode("-" + item));
    ul.appendChild(li);
    document.getElementById('input').value="";
    li.onclick = removeItem;
}
