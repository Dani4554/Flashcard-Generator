//Creates a card that has a partial answer in a sentence object
//Author: Daniel Cherrez

function clozeCard (text, cloze){
    this.textCard = text;
    this.clozeCard = cloze;

    //Checks if the cloze is part of the sentence
    this.foundCloze = this.textCard.indexOf(this.clozeCard);
    if(this.foundCloze == -1){
        console.log("Please input a correct cloze");
        return;
    }

    //Takes the cloze out of the main sentece and creates a partial
    this.temp = this.textCard;

    this.partialCard = this.temp.replace(this.clozeCard, "...");

    //Prints out with functions
    this.cloze = function (){
        console.log("The cloze: " + this.clozeCard);
    };

    this.partial = function  (){
        console.log("The partial: " + this.partialCard);
    };

    this.fullText = function (){
        console.log("The full text: " + this.textCard);
    };
}

module.exports = clozeCard;
