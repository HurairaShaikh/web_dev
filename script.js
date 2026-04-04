let button=document.querySelector("button");

button.addEventListener("click",alertmsg);

function alertmsg(){
let name =prompt("Enter name");
button.textContent ="Your name "+name;
}