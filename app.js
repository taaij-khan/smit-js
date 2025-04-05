var getUl = document.querySelector("#ul");
 var getInp = document.querySelector("#inp");
 
 function addTodo() {
   if (getInp.value == "") {
     alert("please input some value");
   } else {
     getUl.innerHTML += `<li> ${getInp.value} <button onclick='edit(this)'> Edit </button> <button onclick='del(this)'> Delete </button> </li>`;
     getInp.value = "";
   }
 }
 
 function delall() {
   getUl.innerHTML = "";
 }
 
 function edit(e) {
   var pro = prompt("Enter updated value", e.parentNode.firstChild.textContent);
   e.parentNode.firstChild.textContent = pro;
 }
 
 
 function del(e){
     e.parentNode.remove()
 }