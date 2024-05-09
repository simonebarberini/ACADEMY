//PUNTATORI
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const checkout = document.getElementById("checkout");
const reset = document.getElementById("reset");
const coupon = document.getElementById("coupon");
let scontoContainer = document.getElementById("sconto");
const finale = document.getElementById("finale");
const totale = document.getElementById("totale");

//VARIABILI
let prezzo = 1;


alert("Ciao, con SIMONE10 hai il 10% di sconto");

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                prezzo = prezzo + parseInt(checkbox.value);
            }
            console.log(prezzo);
    });

});


checkout.addEventListener("click", function(){
    // Stampo e Rimuovo la virgola dall'ultimo elemento
    let scontoCalcolato = 0;
    if(coupon.value === "SIMONE10"){
        scontoCalcolato = (prezzo/100)*10;
    }
    scontoContainer.textContent = scontoCalcolato;
    totale.textContent = prezzo;
    finale.textContent = parseFloat(prezzo) - scontoCalcolato;
})

reset.addEventListener("click", function(){
    if(coupon.value != ""){
        coupon.value = "";
    }
    totale.innerText = "";
    sconto.innerText = "";
    finale.innerText = "";

    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            checkbox.checked = false;
        }
    })

})