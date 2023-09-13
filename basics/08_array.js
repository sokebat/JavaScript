// array

const myArr = [0, 1, 2, 3, 4, 5]
const names = ["ram", "shyam"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //push element to array at last index
// myArr.push(7)
// myArr.pop()   // remove the emement from array at last index and returns the removed element 

// myArr.unshift(9)  //insert at  first index
// myArr.shift()     // remove element from first index

// console.log(myArr.includes(9)); // gives false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // return array form  index 1 and 2 it excludes index 3 and include index 1 and it donot change orginal array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //return array form index 1 and 3 including both index and it change orginal array it  removes value form index 1 to 3 and make new array(it changes orginal array)
console.log("C ", myArr);
console.log(myn2);




/*

const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

marvelHeros.push(dcHeros)  // push  dcHeros array to last indez of marbel heros

console.log(marvelHeros);
console.log(marvelHeros[3][1]); // superman can be accessed using third index of first arraya and then first index of last array

const allHeros = marvelHeros.concat(dcHeros)  // it merge both array and return single array
console.log(allHeros);

// ... -> spr

const allNewHeros = [...marvelHeros, ...dcHeros]  // merge to arrya using spread operator it it most used method than concat method,can merge more than 2 arrays

console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // it helps to spread out  above arrya into single array
console.log(realAnotherArray);


// some concepts:

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) //gives empty array as .........
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // teturn a new array form set of element


*/