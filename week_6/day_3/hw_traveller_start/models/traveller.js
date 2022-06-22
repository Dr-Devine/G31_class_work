const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
 return this.journeys.map((journey) =>{
   return journey.startLocation
 });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) =>{
    return journey.endLocation
  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {
 let journeyByTransport = []; //this is filter
 this.journey.forEach((journey) => {
   if(journey.transport === transport){
     journeyByTransport.push[journey.transport]
   }
  
 });
 return journeyByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.map((journey) => { //this is filter
    return journey.minDistance;
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0;
  this.journeys.forEach((journey) => {  //this is reduce
    total += journey.distance;
  });
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () { //this is map

};

// extentions are as follows - map then filter  with index of


module.exports = Traveller;
