
const Person = function(name, pet){
    this.name = name;
    this.pet = pet;
    }
    
Person.prototype.greet = function() {
    console.log(`Hi! my name is ${this.name}`);
}
    
Person.prototype.feedPet = function(food){
    const message = `${this.name} fed ${this.pet.name} a ${food}`;
    console.log(message)
    this.pet.eat(food);

}


// const shaggy = new Person('Shaggy Rogers');
// const velma = new Person('Velma Dinkley');
// velma.greet();
// shaggy.greet();
// console.log('shaggy:', Object.getPrototypeOf(shaggy));
// console.log('velma:', Object.getPrototypeOf(velma));

module.exports = Person;
