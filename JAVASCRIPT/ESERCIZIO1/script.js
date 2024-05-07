let eta = prompt("Please enter your age: ", "-1");

if(eta>=18){
    console.log("Puoi votare");
}else if(eta<0){
    console.log("L'utente non ha insrito la sua etá");
}else{
    console.log("Non puoi votare")
}