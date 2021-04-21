//Funzione che genera 5 numeri casuali, li inserisce in un array e li mostra all'utente tramite un alert

function simonSays(arrayNumbers, rNGenerator) {
    var arrayNumbers = [];

    for (var i = 0; i < 5; i++) {

        var rNGenerator = Math.ceil(Math.random() * 50);
        arrayNumbers.push(rNGenerator);
    }

    return console.log(arrayNumbers)
}


var timeSpan = 30;
function countdown(timeSpan) {
    
    var timer = setInterval(function () {
    
        document.getElementById("countdown").innerHTML = timeSpan - 1;
        timeSpan--
    
        if (!timeSpan) {
            clearInterval(timer)
        }
    
    }, 1000);
}