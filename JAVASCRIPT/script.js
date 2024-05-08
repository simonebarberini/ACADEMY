let umano = {
    nome : "Simone",
    cognome : "Barberini",
    eta : 22,
    professione: "Studente",
};

//Piú usata la prima
console.log(umano.professione);//Studente
console.log(umano["nome"]);//Simone

//Riassengnazione
umano.professione = "Mecanico";

//Aggiungere una proprietá amche dopo la creazione dell'oggetto
umano.passioni =["Sport", "coding", "Calcio"];

delete umano.passioni; //elimina la chiave passioni dall'oggetto