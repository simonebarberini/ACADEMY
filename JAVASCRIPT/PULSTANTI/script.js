let tastoRosso = document.getElementById("red");
let tastoGiallo = document.getElementById("yellow");
let tastoVerde = document.getElementById("green");
let quadrato = document.getElementById("quadrato");

tastoRosso.addEventListener("click", function(){
    quadrato.style.backgroundColor = "red";
});

tastoVerde.addEventListener("click", function () {
    quadrato.style.backgroundColor = "green";
});

tastoGiallo.addEventListener("click", function(){
    quadrato.style.backgroundColor = "yellow";
});

