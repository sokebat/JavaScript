/*
// const cart =[" shoes","pants","shirts",]
// createOrder(cart); //this api takes the cart items and returns order details or orderId
// proccedToPayment(orderId) // takes order Id and processed to payment

//creating calbacks on above scenerio!!
const cart = [" shoes", "pants", "shirts",]
createOrder(cart,function () {
    proccedToPayment(orderId)
});

*/

// create promise

// const promise = createOrder(cart) //promise is a object initailly {data: undefine} after some time {data:orderDetails}
// promise.then(function () {
//     proccedToPayment(orderId)
// })

//same as above:
// createOrder(cart).then(function () {
//     proccedToPayment(orderId)
// })

// const GitHub_API ="https://api.githun.com/users/sokebat"
// const user =fetch(GitHub_API)
// console.log(user)

// user.then(function(data){
//     console.log(data)
// })

/*

//calbacks
const cart = ["shoes", "pants", "kurtha"]

api.createOrder(cart, function (orderId) {
    api.proceedToPayment(orderId, function (paymentInfo) {
        api.showOrderSummary(paymentInfo, function () {
            api.updateWallet()
        })
    })

})

//using promise chaining

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWallet(paymentInfo)
    });

//using promise chaining with arrow function
createOrder(cart)
    .then((orderId) => proceedToPayment(orderId)
    )
    .then((paymentInfo) => showOrderSummary(paymentInfo)
    )
    .then((paymentInfo) => updateWallet(paymentInfo)
    );

    */
