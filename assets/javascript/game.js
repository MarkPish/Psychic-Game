let wins = 0;
let losses = 0;
let numGuesses = 9;
let guessChoices = [];
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function(event) {
    let userGuess = event.key;
    console.log(userGuess);
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    

    if (computerChoices.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins ++;
            numGuesses = 9;
            guessChoices = [];
        }

        if (userGuess != computerGuess) {
            numGuesses --;
            guessChoices.push(userGuess);
        }

        if (numGuesses === 0) {
            numGuesses = 9;
            losses ++;
            guessChoices = [];

        }

    let html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numGuesses + "</p>" +
        "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;
        
    }


};