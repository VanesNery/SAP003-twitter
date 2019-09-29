let message = document.getElementById("message");
let btntweet = document.getElementById("btntweet");
let print = document.getElementById("print");
const MAX = 140;

btntweet.addEventListener("click", buttontweet);

function buttontweet (e){
  let prinText = document.createElement("div");
  prinText.setAttribute("id", "printE")
  prinText.textContent = message.value;
  print.appendChild(prinText);
  message.value = "";
}

message.addEventListener("keyup", contChar);

function contChar(e){
  let res = MAX - message.value.length;
  document.getElementById("counter").innerHTML = res;
  
  if(message === 0 || message > 140){
    document.getElementById("counter").style.color = "#f01c1c";
  }
  else if (message <= 120){
    btntweet.removeAttribute("disabled");
    document.getElementById("btntweet").addEventListener("click", buttontweet);
   }
  else{
    btntweet.removeAttribute("disabled");
    document.getElementById("counter").style.color = "#32CD32";
    document.getElementById("btntweet").addEventListener("click", buttontweet);
  }
  }