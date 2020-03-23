// Begroet en vraag om een naam
const userName = prompt('Welkom! Wat is je naam?');

// Bericht terug in console
console.log("Hoi " + userName + "!")

//alert terug
alert("Hoi " + userName + "!")

// random nummer kiezen
//const randomNumber = 9;
const randomNumber = Math.floor(Math.random() * 25);

// random nummer in console
//console.log("randomNumber: " + randomNumber);

// pogingen om te proberen (5x) en daarna stoppen

let attempts = 0;
let correct = false;
let randomNumberInput = 0;

while (attempts < 5 && correct == false) {

    // Vraag om een cijfer van 0 tm 25
    randomNumberInput = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...");

    // gekozen nummer in console
    console.log("randomNumberInput: " + randomNumberInput);

    if (randomNumberInput == randomNumber) {
        alert("Gefeliciteerd je hebt gewonnen");
        correct = true;
    } else if (attempts < 4) {
        alert("Dat is niet correct. Probeer nog een keer!");
    } else {
        alert("Dat is niet correct.");
    }

    attempts++;
    console.log("attempts: " + attempts)
}

alert("Dit was het einde van het spel. Dag " + userName + ", tot de volgende keer!");