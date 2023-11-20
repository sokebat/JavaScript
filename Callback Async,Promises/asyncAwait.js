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