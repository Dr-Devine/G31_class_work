const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const ageTotal = persons.reduce((runningTotal, person) => {
    return runningTotal + person.age;
}, 0);
console.log(ageTotal);             