//PUNTATORI
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const checkout = document.getElementById("checkout");
const reset = document.getElementById("reset");
const coupon = document.getElementById("coupon");
let scontoContainer = document.getElementById("sconto");
const finale = document.getElementById("finale");
const totale = document.getElementById("totale");
const nome = document.getElementById("nome");


//VARIABILI
let prezzo = 1;

benvenuto();

//controlla se un ingrediente é stato selezionato e ne somma il prezzo
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                prezzo = prezzo + parseInt(checkbox.value);
            }
            console.log(prezzo);
    });

});

//quando viene premuto il tasto checkout stampa i prezzi e calcola lo sconto se
//é stato inserito il codice sconto corretto
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


//al click del tasto reset vengono azzerati tutti i campi dei prezzi 
//e deselezionate le checkbox
reset.addEventListener("click", function(){
    if(coupon.value != ""){
        coupon.value = "";
    }
    prezzo = 1;
    totale.innerText = "";
    sconto.innerText = "";
    finale.innerText = "";
    nome.innerText = "";

    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            checkbox.checked = false;
        }
    })
    benvenuto();
})

function benvenuto(){
    const nomeCliente = prompt("Inserisci il tuo Nome");
    nome.innerText = nomeCliente;
    alert("Ciao, con SIMONE10 hai il 10% di sconto");
    
}