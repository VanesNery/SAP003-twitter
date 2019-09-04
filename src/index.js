const texto = document.getElementById("Texto").addEventListener("keyup", contaChar);
function contaChar(){
let max = 140;
let texto = document.getElementById("Texto").value.length;
let res = max - texto;
document.getElementById("contador").innerHTML = res;

if(texto === "0"){
    document.getElementById("btn_tweet").disabled = false;
}

else{
    document.getElementById("btn_tweet").disabled = true;
    return botaotweet;
}
}

document.getElementById("btn_tweet").addEventListener("click", botaotweet);
    function botaotweet (){
      let msg = [];
      let Guardar = document.getElementById("Texto").value;
      let Texto = localStorage.setItem("key", Guardar);
      msg.push(localStorage.getItem("key"));
      document.getElementById("mensagem").innerHTML+= msg;
    }