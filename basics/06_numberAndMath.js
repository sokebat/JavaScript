// -----------------Numbers------------------------
/*
const score = 400
console.log(score) // gives 400

const number = new Number(400) //[Number: 400]
console.log(number);

console.log(number.toString());
console.log(number.toString().length);
console.log(number.toFixed(3)); //gives precision up to 3 decimal

const otherNumber = 39.39
console.log(otherNumber.toPrecision(3)); // gives round up upto 3 numbers as it gives 39.4 if otherNumber = 123.89 it gives 124 it returns  string not number

let hunderds = 10000000000
console.log(hunderds.toLocaleString()); //gives in us format it is defult
console.log(hunderds.toLocaleString('en-IN'));  //  changes defult format
*/

// --------------------------------Maths--------------

// console.log(Math.PI) //gives pi value
// console.log(Math.abs(-5)); //gives absolute value
// console.log(Math.round(4.2)); //gives 4
// console.log(Math.round(4.6)); //gives 5
// console.log(Math.ceil(4.2)); //gives 5
// console.log(Math.floor(4.6)); //gives 4 
// console.log(Math.min(4,5,6,9,8,3)); //gives min value
// console.log(Math.max(4,5,6,9,8,3)); //gives max value
let value = Math.random();
console.log(value); //gives radom value between 0  and 1
console.log(value * 10); // changes value according to need
console.log(value * 10 + 1);

//to get  random value between any number
const min = 20;
const max = 40;

const formula = Math.floor(Math.random() * (max - min + 1)) + min
console.log(formula);



