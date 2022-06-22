const Dinosaur = require("./dinosaur");

const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.collectionOfDinosaurs = function(){
    this.dinosaurs.dinosaur([Dinosaur]);
}
module.exports = Park;