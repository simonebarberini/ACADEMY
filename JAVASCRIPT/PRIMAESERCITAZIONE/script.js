function verificaCredenziali(nomeUtente, password) {
    for (let utente of utenti) {
        if (utente.username === nomeUtente && utente.password === password) {
            return true;
        }
    }
    return false;
}

function getUtente(username){
    for (let utente of utenti) {
        if (utente.username === username){
            return utente;
        }
    }
}

function accedi(){
    let username = prompt("Inserisci il tuo username: ");
    let password = prompt("Inserisci la password: ");
    let utenteLoggato = null;
    if (verificaCredenziali(username, password)){
        utenteLoggato = getUtente(username);
        alert("Accesso consentito, Benvenuto "+utenteLoggato.username);
        return operazioni(utenteLoggato);
    }else{
        return alert("Credenziali errate");
    }
}

function operazioni(utenteLoggato){
    let menuOperazioni = prompt("Inserisci (1) per bonifico, (2) per deposito + (3) per prelievo");
    switch (menuOperazioni) {
        case "1":
            bonifico(utenteLoggato);
            break;
        case "2":
            deposito(utenteLoggato);
            break;
        case "3":
            prelievo(utenteLoggato);
            break;
        default:
            alert("Scelta non valida. Riprova.");
    }
}
   
function getUtenteIban(iban){
    for (let utente of utenti) {
        if (utente.iban=== iban) {
            return utente;
        }
    }
    return alert("Iban non corretto");
}

function getSaldo(utente){
    alert("Il tuo saldo, "+ utente.username + " é : "+utente.saldo);
} 

function bonifico(utenteLoggato){
    let ibanDestinatario = prompt("Inserire iban destinatario");
    let utenteDestinatario = getUtenteIban(ibanDestinatario);
    let importo = prompt("Inserisci importo: ");
    if(utenteLoggato.username === utenteDestinatario.username){
        alert("Non puoi fare un bonifico a te stesso");
    }else if(importo>utenteLoggato.saldo){
        alert("Importo superiore al saldo");
    }else{
        importo = parseFloat(importo);
        utenteLoggato.saldo -= importo;
        utenteDestinatario.saldo += importo;
    }
    getSaldo(utenteLoggato);
    alert(utenteDestinatario.saldo);
}

function prelievo(utenteLoggato){
    let importo = prompt("Inserisci l'importo da prelevare: ");
    importo = parseFloat(importo);
    if(utenteLoggato.saldo < importo){
        alert("Impossibile prelevare saldo inferiore alla somma da prelevare");
    }else{
        utenteLoggato.saldo -= importo;
        alert("Saldo rimanente: "+ utenteLoggato.saldo);
    }
}

function deposito(utenteLoggato){
    importo = prompt("Inserisci l'importo da depositare: ");
    importo = parseFloat(importo);
    utenteLoggato.saldo += importo;
    alert("Il tuo saldo attuale é: "+ utenteLoggato.saldo);
}

let utenti = [
    utente1 = {
        username: "paperino1",
        password: "1234",
        iban: "IT53X0300203280791542917887",
        saldo: 350
    },
    utente2 = {
        username: "pluto",
        password: "2244",
        iban: "IT17O0300203280481358942222",
        saldo: 500,
    },
    utente3 = {
        username: "simone",
        password: "2222",
        iban: "IT54J0300203280893487617767",
        saldo: 400,
    },
]

let menu = prompt("Inserisci (1) per accedere, (0) per uscire");

switch (menu) {
    case "1":
        accedi();
        break;
    case "0":
        alert("Arrivederci!");
        break;
    default:
        alert("Scelta non valida. Riprova.");
}

