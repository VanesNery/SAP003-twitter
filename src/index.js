// $("Texto").keydown(function botaotweet (){  
//   let msg = [];
//   let Guardar = document.getElementById("Texto").value;
//   let Texto = localStorage.setItem("key", Guardar);
//   document.getElementById("btn_tweet").disabled = true;
//   msg.push(localStorage.getItem("key"));
//   document.getElementById("mensagem").innerHTML+= msg; 
// });
document.getElementById("btn_tweet").addEventListener("click", botaotweet);
function botaotweet (){
  let msg = [];
  let Guardar = document.getElementById("Texto").value;
  let Texto = localStorage.setItem("key", Guardar);
  msg.push(localStorage.getItem("key"));
  document.getElementById("mensagem").innerHTML+= msg;
}