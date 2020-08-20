var list = document.getElementById("li_ul");
firebase.database().ref('todos').on('child_added',function (data){

// creat li and add text
var li = document.createElement('li')
var liText = document.createTextNode(data.val().value)
li.setAttribute("class","txt")
li.appendChild(liText)

// Del button
var delButn = document.createElement("button")
var delText = document.createTextNode("Delete")
delButn.appendChild(delText)
delButn.setAttribute("class","btn")
delButn.setAttribute('id',data.val().key)
delButn.setAttribute("onclick","deleteItem(this)")
li.appendChild(delButn)

// Edit Button
var EdtBtn = document.createElement("button");
var EdtText = document.createTextNode("Edit")
EdtBtn.appendChild(EdtText)
EdtBtn.setAttribute("class","btn1")
EdtBtn.setAttribute('id',data.val().key)
li.appendChild(EdtBtn)
EdtBtn.setAttribute("onclick","editItem(this)")


list.appendChild(li)
  
})

function addTodo() {
var todo_item = document.getElementById("todo_item");
  console.log(todo_item.value)
  var key = firebase.database().ref('todos').push().key

var todo ={
value: todo_item.value,
key: key  
}
firebase.database().ref('todos').child(key).set(todo)

todo_item.value = ""

}

function deleteItem(e){

firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove()
}


function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  var editTodo = {
  value : val,
  key : e.id
  
}
firebase.database().ref('todos').child(e.id).set(editTodo)
e.parentNode.firstChild.nodeValue = val;

}




function delAll(){
list.innerHTML = ""    
}

