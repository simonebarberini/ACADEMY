function miaCallback(saluto){
    console.log(saluto);
}

function saluta(nome, callback){
    let saluto = "Ciao " + nome + ", come stai?";
    callback(saluto);
}

saluta("Simone", miaCallback);