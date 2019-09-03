document.getElementById("btn_tweet").addEventListener("click", botaotweet);

function botaotweet (){
  let Guardar = document.getElementById("Texto").value;
  let Texto = localStorage.setItem("key", Guardar);
  
document.getElementById("mensagem").innerHTML+= localStorage.getItem("key");
}