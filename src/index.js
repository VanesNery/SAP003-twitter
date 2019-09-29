let message = document.getElementById("message");
let btntweet = document.getElementById("btntweet");
let print = document.getElementById("print");
const MAX = 140;
counter = document.getElementById("counter");

btntweet.addEventListener("click", buttontweet);

function buttontweet (){
  let prinText = document.createElement("div");
  prinText.setAttribute("id", "printE")
  prinText.textContent = message.value;
  print.appendChild(prinText);
  message.value = "";
}

message.addEventListener("keyup", contChar);

function contChar(){
  let res = MAX - message.value.length;
  counter.innerHTML = res;
  
  if(res < 0 || res > 140){
    btntweet.setAttribute("disabled", "");
    counter.style.color = "#f01c1c";
  }
  else if (res > 20){
    btntweet.removeAttribute("disabled");
    counter.style.color = "#32CD32";
   }
  else{
    btntweet.removeAttribute("disabled");
    counter.style.color = "#ff7300";
  }

  let lines = message.value.split("\n");
  let linesCount = lines.reduce((acum,line)=> acum + Math.max(Math.ceil(line.length/50), 1),0)
   
  message.setAttribute("rows", linesCount);
}