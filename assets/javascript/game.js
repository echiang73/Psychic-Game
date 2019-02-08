// list array choices
var arrayChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables tracking and setting to zero or start value
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetter = [];
var computerPickLetter = [];

var computerGuess = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];