// Creates an array that lists out all of the options (a-z)
var arrayChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables tracking and setting to zero or start value
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var computerPick = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
console.log(computerPick);

// Upon conditional logic completion, reset 1) guesses left, 2) guessed letter, and 3) have computer pick a new letter.
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    computerPick = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
    console.log(computerPick);
}

// Game - Conditional Logic
document.onkeyup = function(event) {
    var userPick = event.key.toLowerCase();
    console.log(userPick);

    // Make sure user picks a letter from A-Z
    if ((userPick === "a") || (userPick === "b") || (userPick === "c") || (userPick === "d") || (userPick === "e") || (userPick === "f") || (userPick === "g") || (userPick === "h") || (userPick === "i") || (userPick === "j") || (userPick === "k") || (userPick === "l") || (userPick === "m") || (userPick === "n") || (userPick === "o") || (userPick === "p") || (userPick === "q") || (userPick === "r") || (userPick === "s") || (userPick === "t") || (userPick === "u") || (userPick === "v") || (userPick === "w") || (userPick === "x") || (userPick === "y") || (userPick === "z")) {
        guessedLetters.push(userPick);
        guessesLeft--; //or use guessesLeft = guessesLeft-1;

        // Conditional Logic to determine the outcome (win/loss) and increment the appropriate numbers
        if (guessesLeft > 0) {
            if (userPick === computerPick) {
                wins++;
                alert("You guess the correct letter " + computerPick + " that I'm thinking of!");
                reset();
            }
        }
        else {
            losses++;
            alert("Wrong-O, the letter I'm thinking of is " + computerPick + ". Try again.");
            reset();
        }
    }
    else {
        alert("Please choose a letter from A-Z!");
    }

    // Display results
    var html = "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses left: " + guessesLeft + "</p>" +
                "<p>Your guesses so far: " + guessedLetters + "</p>";
    document.getElementById("resultTally").innerHTML = html;
}