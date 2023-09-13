// backtick->` used to put vlaue through varibale in string
/*
 let name = "hero" // 1st method to declare string
 console.log(typeof(name)) //gives string*
*/

const name = new String("hero-hello-nice-dami")  //2nd method to declare string as a object
console.log(typeof (name)) //gives object
console.log(name) // gives String {'hero'}
console.log(name[0]);

// ------------String Method-------------
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(2))
console.log(name.indexOf('h'))
console.log(name.split('-')); //splits the string and return the string in the form of array


const newString = name.substring(0, 3) //cannot take negative value it starts with 0 if we put negative value
console.log(newString);

// const anotherString = name.slice(0,3) // take negative value
// console.log(anotherString)

const anotherString = name.slice(-10,3) // take negative value slice(start index,end index)
console.log(anotherString)

const againAnotherSrting =" hello   "
console.log(againAnotherSrting);    
console.log(againAnotherSrting.trim()); //removes starting and ending space

const url = "https//www.herodona.com/dona%96hello" 
console.log(url.replace('%96','-')); //replace value
console.log(url.includes('hello')); //return trueif it found hello




