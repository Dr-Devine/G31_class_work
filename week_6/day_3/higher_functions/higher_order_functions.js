// const myNymbers = [1,2,3,4,5];

// for (const number of myNymbers){
//     console.log(`This is number ${number}`);
// }

// myNymbers.forEach((number, index) => {
//     console.log(`This is number ${number} at the index position ${index}`);
// });

// const multiplyByTwo = function(numbers){
//     const result = numbers.map((number) => {
//         return number * 2;
//     });

    
//     return result;
// }

// console.log(multiplyByTwo(myNymbers));

// Using the forEach method, complete the following tasks:
// Write a function called getEvens that takes an array of numbers as
//  an argument and returns a new array that only contains the even numbers
//   from the original array.
// Write a function called sumElements that takes an array of numbers as an 
// argument and returns the sum total of all the elements in the array.
// Hint: If you get stuck, start by writing the function using a for of loop, 
// then refactor, replacing the for loop with the forEach.

// const getEvens = function(numbers){
//     const result = numbers.filter((number) => {
//         return number % 2 === 0;

//     });


//     return result;
// }
// console.log(getEvens(myNymbers));

// const sumElements = function(numbers){
//     let total = numbers.reduce((runningTotal, number) => {
//         return runningTotal + number;

//     }, 0);

//     return total;
// }

// console.log(sumElements(myNymbers));

// const result = myNymbers.filter(number => number % 2 === 0);

// console.log(result);

const ourForEach = function(array, callback){
    for(const element of array){
        callback(element);
    }
};

const numbers = [1,2,3,4,5];

ourForEach(numbers, (number) => {
    console.log('the number is:', number);
});