let score = 33
console.log(typeof score);//gives number
console.log("----------------------------------------");

//-------------------------------------------------------------------
let age = "33"
console.log(typeof age);//gives string

let ageInNumber = Number(age)
console.log(typeof ageInNumber); // converted to number
console.log("----------------------------------------");

//-------------------------------------------------------------------
let randomValue = "4568abc"
console.log(typeof randomValue);//gives string

let randomValueInNumber = Number(randomValue)
console.log(typeof randomValueInNumber); //gives number
console.log(randomValueInNumber); //gives NaN --> not a number
console.log("----------------------------------------");

//-------------------------------------------------------------------
let emptyValue = null
console.log(typeof emptyValue);//gives object

let emptyValueInNumber = Number(emptyValue)
console.log(typeof emptyValueInNumber); //converted to number
console.log(emptyValueInNumber); //gives 0
console.log("----------------------------------------");

//-------------------------------------------------------------------
let booleanValue = true
console.log(typeof booleanValue);//gives boolean

let booleanValueInNumber = Number(booleanValue)
console.log(typeof booleanValueInNumber); //converted to number
console.log(booleanValueInNumber); //gives 1 for true
console.log("----------------------------------------");


// "33" ---> 33
// "33abaj" ---> NaN
// true --> 1
// false --->0

//-------------------------------------------------------------------
let isLoggedIn = 1
console.log(typeof isLoggedIn); //gives number

let isLoggedInInBoolean = Boolean(isLoggedIn)
console.log(typeof isLoggedInInBoolean); //gives booleen true for 1
console.log("----------------------------------------");

//-------------------------------------------------------------------
let isString = "Ashish"
console.log(typeof isString); //gives string

let isStringInBoolean = Boolean(isString)
console.log((typeof isStringInBoolean)); //gives true if string is empty gives false
console.log("----------------------------------------");


let randomNumber = 55
console.log(typeof randomNumber); //gives number

let randomNumberInString = String(randomNumber)
console.log(typeof (randomNumberInString)); //gives string
console.log("----------------------------------------");




//************************Operations*********************

let str1 = "Ashish"
let str2 = "Subedi"

let str = str1 + " " + str2
console.log(str);
console.log("----------------------------------------");

console.log("5" + 5); //gives 55 :-->  
console.log(5 + "5"); //gives 55 :-->  
console.log("5" + 5 + 5); //gives 555 :--> 
console.log(5 + 5 + "5"); //gives 105 :--> 

// Js read two operands before performing if it finds one of operands string then it convert other to string and perform operation

