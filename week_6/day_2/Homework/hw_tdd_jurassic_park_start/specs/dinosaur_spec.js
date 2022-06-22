const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur = new Dinosaur('stegosaurus', 'herbivore', 44)
    dinosaur = new Dinosaur('velociraptor', 'carnivore', 67)
    dinosaur = new Dinosaur('tricerapots', 'herbivore', 43)
    dinosaur = new Dinosaur('pteradactyl', 'omnivore', 32)
    dinosaur = new Dinosaur('allosaurus', 'omnivore', 47)
  });

  it('should have a species', function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, 't-rex');
  });

  it('should have a diet', function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, 'carnivore');
  });

  it('should have an average number of visitors it attracts per day', function () {
    const actual = dinosaur.guestsAttractedPerDay;
    assert.strictEqual(actual, 50);
  });

});
