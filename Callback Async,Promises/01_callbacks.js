// console.log("hello there")
// console.log("I am learning");
// console.log("javascript!!");

// console.log("hello there")
// function callbackCheck() {
//     console.log("I am learning");
// }
// console.log("javascript!!");

// console.log("hello there")
// setTimeout(function callbackCheck() {
//     console.log("I am learning");
// }, 5000);
// console.log("javascript!!");


/* adding items to cart in e-commerce app:

In the real world  one work has to be start after finishing the previous work then need to call the other apis that need to be manage accordingly

scenerio:
add items to cart
procced to payment
show order summary
update wallet

to many internal call of function there exixt callback hell 

*/


// const cart = ["shoes", "pants", "kurtha"]

// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(function () {
//             api.updateWallet()
//         })
//     })

// })

// using callback we loose control of our code as in above code, code is depend upon the createOrder API  we donot know how create order api is creates how it works may be it calls the callback function twice or thrice or it cannot call the function in some point of time



//callbacks
// 1) powerfull way to handel async operation in JS-async JS is exist because of callbacks
//2) Issue with callbacks
//  a. callback hell- lot of nested callbacks
//  b.inversion of control-lossing control over the code
