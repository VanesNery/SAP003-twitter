let message = document.getElementById("message");
let btntweet = document.getElementById("btntweet");
let print = document.getElementById("print");

btntweet.addEventListener("click", buttontweet);

function buttontweet (e){
  let prinText = document.createElement("li");
  prinText.setAttribute("id", "printE")
  prinText.textContent = message.value;
  print.appendChild(prinText);
  message.value = "";
}