//Funzione che genera 5 numeri casuali, li inserisce in un array e li mostra all'utente tramite un alert
function simonSays() {

    var arrayNumbers = [];

    for (var i = 0; i < 5; i++) {

        var randomNumber = Math.ceil(Math.random() * 50);
        arrayNumbers.push(randomNumber);
    }

    alert("Simon says... " + "'" + arrayNumbers.join(" - ") + "'!");
    return arrayNumbers;
}

function countdown(generatedNumbers) {
    var timeSpan = 30;
    var arrayInput = [];
    var rememberedNumbers = [];

    var timer = setInterval(function () {

        document.getElementById("countdown").innerHTML = timeSpan - 1 + '" ';
        timeSpan--;

        if (!timeSpan) {
            clearInterval(timer)
            for (var i = 0; i < 5; i++) {
                var inputUtente = parseInt(prompt("Simon said..."));
                if (Number.isNaN(inputUtente)) {
                    alert("Inserire un numero");
                    i--;

                } else {
                    arrayInput.push(inputUtente);
                }
            }

            for (var i = 0; i < generatedNumbers.length; i++) {

                if (arrayInput.includes(generatedNumbers[i])) {
                    rememberedNumbers.push(generatedNumbers[i]);
                }
            }

            alert("Hai ricordato " + rememberedNumbers.length + " numero/i! " + "(" + rememberedNumbers.join(" - ") + ")")
            return rememberedNumbers;
        }
    }, 1000);
}

