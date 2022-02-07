var btnVoltar = document.querySelector("#voltar");
var btnIniciar = document.querySelector("#iniciar");
var body = document.querySelector("body")

btnVoltar.addEventListener("click", function() {
    body.className = "voltar-js";
})
btnIniciar.addEventListener("click", function(){
    body.className = "iniciar-js";
})