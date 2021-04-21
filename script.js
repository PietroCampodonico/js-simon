// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individua

// Un alert() espone 5 numeri generati casualmente.
var arrayNumbers = [];
var simonNumbers;

function simonSays(arrayNumbers, rNGenerator) {

    for (var i = 0; i < 5; i++) {
        
        var rNGenerator = Math.ceil(Math.random() * 50);
        arrayNumbers.push(rNGenerator);
    }
    
    console.log(arrayNumbers);
    alert("Simon says... " + "(" + arrayNumbers + ")!");
}

simonSays(arrayNumbers, simonNumbers)

// Da li parte un timer di 30 secondi.
function countdown(timeSpan, inputUtente) {
    
    var timer = setInterval(function () {
        
        document.getElementById("countdown").innerHTML = timeSpan - 1 + '" ';
        timeSpan--
        
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        if (!timeSpan) {
            clearInterval(timer)
            for (var i = 0; i < 5; i++) {
                var inputUtente = parseInt(prompt("Simon said..."));
            }
        }

    }, 1000);
}

var secondi = 3;
var risposteUtente;

countdown(secondi, risposteUtente);


