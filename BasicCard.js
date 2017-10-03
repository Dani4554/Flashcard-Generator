//Creates the constructor for a basic card object
//Author: Daniel Cherrez


function basicCard (front, back){

    this.frontCard = front;
    this.backCard = back;

    this.front =  function (){
        console.log("The Front: " + this.frontCard);
    };

    this.back = function (){
        console.log("The Back: " + backCard);
    };
}


module.exports = basicCard;



