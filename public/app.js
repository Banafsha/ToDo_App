var list = document.getElementById("li_ul");

function addTodo(){
var todo_item = document.getElementById("todo-item")
 
// creat li and add text
var li = document.createElement('li')
var liText = document.createTextNode(todo_item.value)
li.setAttribute("class","txt")
li.appendChild(liText)

// Del button
var delButn = document.createElement("button")
var delText = document.createTextNode("Delete")
delButn.appendChild(delText)
delButn.setAttribute("class","btn")
delButn.setAttribute("onclick","deleteItem(this)")
li.appendChild(delButn)

// Edit Button
var EdtBtn = document.createElement("button");
var EdtText = document.createTextNode("Edit")
EdtBtn.appendChild(EdtText)
EdtBtn.setAttribute("class","btn1")
li.appendChild(EdtBtn)
EdtBtn.setAttribute("onclick","editItem(this)")


list.appendChild(li)
todo_item.value = ""

}

function deleteItem(e){
e.parentNode.remove()
}


function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}




function delAll(){
list.innerHTML = ""    
}

