function add() {
var node = document.createElement("li");                 
var textnode = document.createTextNode("value");        
node.appendChild(textnode);                              
document.getElementById("todo").appendChild(node);     
}
