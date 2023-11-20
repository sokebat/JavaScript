/*

Async function:
- Always return a promise if we donot return  promise  take value and wrap inside the promise and return
- Async and Await combo are used to handel promises

- Await keyword can only 
be used inside the async function
- await can be used  before promise and it will handel promise


*/

/* 
 // returning non promise, non promise value is wrap inside the promise and return it

async function getData() {

    return "hello!!"

}
const dataPromise = getData();
dataPromise.then((result) => console.log(result)) 

*/

/*
// returning promise no need to wrap it directly return promise

const p = new Promise((resolve, reject) => {
    resolve("promise is resolved")
})


async function getData() {
    return p;
}

const dataPromise = getData()

dataPromise.then((res) => console.log(res))

*/

/*
// handelling  promise with async await
const p = new Promise((resolve, reject) => {
   resolve("promise is resolved")
})
async function handelPromise() {
   const value = await p;
   console.log(value);
}
handelPromise()

*/

/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is resolved")
    }, 10000)
})


// consuming promise using async await
async function handelPromise() {
    const value = await p;
    console.log(" it wil be printed after resolving promises!!")
    console.log(value);
}
handelPromise()


// consuming promise using older way
// function getData() {
//     p.then((res) => console.log(res))
//     console.log('js engine not wait to consume promise  and it prints this line!!')
// }
//getData()

*/

/*

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is resolved1")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("promise is resolved2") }, 10000)
})


async function handelPromise() {
    const val1 = await p1;
    console.log(" it wil be printed after resolving promises 1!!")
    console.log(val1);

    const val2 = await p2;
    console.log(" it wil be printed after resolving promises 2!!")
    console.log(val2);

}
handelPromise()

*/


const API_URL = "https://api.github.com/users/sokebat"

async function handelPromise() {
    try {
        const data = await fetch(API_URL)
        const jsonValue = await data.json()
        console.log(jsonValue)

    } catch (error) {
        console.log(error)

    }

    // fetch(API_URL)
    //     .then((res) => res.json())
    //     .then((jsonValue) => console.log(jsonValue));

}

handelPromise()