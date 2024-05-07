let voto = prompt("Inserisci il voto dell'esame");
voto = parseInt(voto); //Casting della variabile voto
console.log("Tipo di voto: " + typeof voto);
console.log("Voto: " + voto);

switch(true){
    case voto>=90:
        console.log("A");
        break;
    case voto >= 80 && voto<=89:
        console.log("B");
        break;
    case voto >= 70 && voto<=79:
        console.log("C");
        break;
    case voto >= 60 && voto<=69:
        console.log("D");
        break;
    default:
        console.log("F");
}