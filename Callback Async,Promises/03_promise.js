const cart = ["shoes", "pants", "kurtha"]
createOrder(cart) //orderId
    .then(function (orderId) {
        console.log(
            " promise is consumed"
        );
        console.log(orderId);
        return orderId;
    }).catch(function (err) {
        console.log(err.message);
    }).then(function (orderId) {
        return proccedToPayment(orderId)
    }).then(function (paymentInfo) {
        console.log(paymentInfo)
    }).catch((err) => { console.log(err.message) })
    .then(function () {
        console.log("no matter this wii be called");
    }).catch(function (err) {
        console.log("generic catch");
    })


// const cart = ["shoes", "pants", "kurtha"]
// const promise = createOrder(cart) //orderId
// promise.then(function (orderId) {
//     console.log(
//         " promise is consumed"
//     );
//     // proccedToPayment(orderId)
// }).catch(function (err) {
//     console.log(err.message);
// })

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        //logic to create an order
        //validateCart
        //call the db
        //call api to get.......
        if (!validateCart(cart)) {
            const err = new Error("cart is not valid")
            reject(err)
        }
        //logic to createOrder
        const orderId = "12345"
        if (orderId) {
            resolve(orderId)

        }
    });

    return pr;
}

function validateCart(cart) {
    return true
    // return false
}


function proccedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("payment Successful")
    })
}