const user = {
    username: "ram",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this  uses: in the current contex it is used to excess variable it is used for object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // display current context

// function functionOne(){
//     let username = "Ram"
//     console.log(this.username); // doesnt work for function
// }

// functionOne()

// const functionOne = function () {
//     let username = "Ram"
//     console.log(this.username); // doesnt work for function
// }

// const functionOne =  () => {
//     let username = "Ram"
//     console.log(this);  // it gives empty context
// }


// functionOne()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const returnObject = () => ({username: "Ram"})  //return object


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
