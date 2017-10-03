//Implements the BasicCard and ClozeCard constructors to make  a flashcard app
//Author: Daniel Cherrez

var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");

var firstPresident = new basicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.frontCard); 

// "George Washington"
console.log(firstPresident.backCard); 

var firstPresidentCloze = new clozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.clozeCard); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partialCard); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.textCard);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new clozeCard("This doesn't work", "oops");