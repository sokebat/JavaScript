// let a = 300
// const b = 300;
// var c = 300
// if (3) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
//     console.log("INNER: ", b);
//     console.log("INNER: ", c); // gives 300 is variable declared with var is global scope

// }

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "beast"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   //  website scope is end in above

    two()

}

one()

if (true) {
    const username = "beast"
    if (username === "beast") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // out of scope
}

// console.log(username); //out of scope


// ++++++++++++++++++ Basic Hoisting ++++++++++++++++++


console.log(addone(5)) // it work for function before access after declaration


function addone(num) {     //function
    return num + 1
}


console.log(addTwo(5)); // gives error cannot access 
const addTwo = function (num) {    // expression function
    return num + 2
}
