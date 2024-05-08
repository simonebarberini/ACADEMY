//Funzione che verifica se le credenziali corrispondono con quelle di un utente salvato
function verificaCredenziali(nomeUtente, password) {
    for (let utente of utenti) //cicla su tutti gli utenti registrati finché non trova una corrispondenza{
        if (utente.username === nomeUtente && utente.password === password) {
            return true;
        }
    }
    return false;

//Funzione ausiliaria che ritorna un oggetto utente
function getUtente(username){
    for (let utente of utenti) {
        if (utente.username === username){
            return utente;
        }
    }
}
//Funzione che permette l'accesso solo dopo aver controllato le credenizali
function accedi(){
    let username = prompt("Inserisci il tuo username: ");
    let password = prompt("Inserisci la password: ");
    let utenteLoggato = null;
    if (verificaCredenziali(username, password)){
        utenteLoggato = getUtente(username);
        alert("Accesso consentito, Benvenuto "+utenteLoggato.username);
        return operazioni(utenteLoggato);//se le credenziali sono corrette accediamo al menu delle operazioni
    }else{
        return alert("Credenziali errate");//altrimenti stampa messaggio di errore e termina
    }
}
//Funzione che stampa a schermo le operazioni disponibili e e aspetta la scelta di un operazione da eseguire
function operazioni(utenteLoggato){
    let menuOperazioni = prompt("Inserisci (1) per bonifico, (2) per deposito (3) per prelievo");
    switch (menuOperazioni) {
        case "1":
            bonifico(utenteLoggato);//manda alla funzione bonifico e vuole come parametro l'utente delle quali sono state verificate le credenziali
            break;
        case "2":
            deposito(utenteLoggato);//manda alla funzione deposito e vuole come parametro l'utente delle quali sono state verificate le credenziali
            break;
        case "3":
            prelievo(utenteLoggato);//manda alla funzione prelievo e vuole come parametro l'utente delle quali sono state verificate le credenziali
            break;
        default:
            alert("Scelta non valida. Esco...");//scelta non valida termina.
    }
}
//funzione ausiliaria di bonifico la quale accetta un iban ne verifica la  
//corretteza tra gli utenti registrati e appena ne matcha uno ritorna l'oggetto utente
//altrimenti invia un messagio di errore e termina
function getUtenteIban(iban){
    for (let utente of utenti) {
        if (utente.iban=== iban) {
            return utente;
        }
    }
    return alert("Iban non corretto");
}
//funzione che stampa a schermo il saldo dell'utente
function getSaldo(utente){
    alert("Il tuo saldo, "+ utente.username + " é : "+utente.saldo);
} 

//Funzione che esegue il bonifico dopo aver effttuato i controlli quali: 
function bonifico(utenteLoggato){
    let ibanDestinatario = prompt("Inserire iban destinatario");
    let utenteDestinatario = getUtenteIban(ibanDestinatario);
    let importo = prompt("Inserisci importo: ");
    if(utenteLoggato.iban === utenteDestinatario.iban){ //non é possibile effettuare un bonifico a se stessi
        alert("Non puoi fare un bonifico a te stesso");
    }else if(importo>utenteLoggato.saldo){ //Non é possibile effettuare un bonifico se non si ha abbastanza saldo
        alert("Importo superiore al saldo");
    }else{
        importo = parseFloat(importo);//controlli superati effettua il bonifico
        utenteLoggato.saldo -= importo;
        utenteDestinatario.saldo += importo;
    }
    getSaldo(utenteLoggato);
    alert(utenteDestinatario.saldo);
}
//Funzione che esegue il prelievo di denaro 
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

