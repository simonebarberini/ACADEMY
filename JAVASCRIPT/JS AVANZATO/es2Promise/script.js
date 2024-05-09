let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        let result = "Ok, dati ricevuti correttamente";
        resolve(result)
    }, 3500);
});

promise.then(function(result){
    console.log(result);
})
promise.catch(function(errore){
    console.log(errore);
})