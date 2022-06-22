const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50, [])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    park.addDinosaur('t-rex', 'carnivore', 50)
    park.addDinosaur('stegosaurus', 'herbivore', 44)
    park.addDinosaur('velociraptor', 'carnivore', 67)
    park.addDinosaur('tricerapots', 'herbivore', 43)
    park.addDinosaur('pteradactyl', 'omnivore', 32)
    park.addDinosaur('allosaurus', 'omnivore', 47)
    const expected = ["t-rex", "stegosaurus", "velociraptor", "tricerapots", "pteradactyl", "allosaurus"]
    const actual = park.dinosaurs;
    assert.deepEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('brachiosaurus', 'herbivore', 99)
    const expected = ['brachiosaurus'];
    const actual = park.dinosaurs;
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
