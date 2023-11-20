const promiseOne = new Promise((resolve, reject) => {
    // do async task
    // DB call,cryptography,network

    setTimeout(() => {
        console.log("hello this is promise it,is eiher complete or reject")
        resolve();
    }, 1000)

})
// .then() have connection with resoleve 
promiseOne.then(() => {
    console.log("promise consumed!");
}

)

// creating promise without sotoring in variable
new Promise((resolve, reject) => {
    // do async task
    // DB call,cryptography,network

    setTimeout(() => {
        console.log("promise is not required to store in variable ")
        resolve();
    }, 1000)

}).then(() => {
    console.log("promise is consumed!");
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "hello", email: "hello@hell.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: "hello", password: "1212" })
        } else {
            reject("ERROR!!! Something went wrong")
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("the promise is either resolved or rejected"))

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if (!error) {
//             resolve({ username: "hii", password: "1212" })
//         } else {
//             reject("ERROR!!! Js went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive()
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/sokebat')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))




