const texto = document.getElementById("Texto").addEventListener("keyup", contaChar);
function contaChar(){
let max = 140;
let texto = document.getElementById("Texto").value.length;
let res = max - texto;
document.getElementById("contador").innerHTML = res;

if(texto === 0 || texto > 140){
    document.getElementById("btn_tweet").disabled = true;
    document.getElementById ("contador").style.color = "#f01c1c";
}
else if (texto <= 120){
    document.getElementById("btn_tweet").disabled = false;
    document.getElementById("btn_tweet").addEventListener("click", botaotweet);
 }
else{
    document.getElementById("btn_tweet").disabled = false;
    document.getElementById ("contador").style.color = "#32CD32";
    document.getElementById("btn_tweet").addEventListener("click", botaotweet);
}
}
function botaotweet (){
      let msg = [];
      let Guardar = document.getElementById("Texto").value;
      localStorage.setItem("key", Guardar);
      msg.push(localStorage.getItem("key"));
      document.getElementById("mensagem").innerHTML= msg;
    }