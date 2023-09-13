
//object is created in two ways:

// 1) singleton --> is made when object is from constructor  not form literals
// Object.create

// 2) object literals -->  discuss below:
/*
const mySym = Symbol("key1") //declared symbol of key1


const JsUser = {
    name: "Ram",
    "full name": "Ram bhadur",   //key can be written like this
    [mySym]: "mykey1",  //symbol is used as key using square[] to make symbol type if we donot use [] it will be  as string type
    age: 18,
    location: "Pokhara",
    email: "ram@bhadur.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // int this case only this method will work to access from object(dot method is not working for this)

// console.log(JsUser[mySym]) //it can be accessed using this method  for object  type

JsUser.email = "ram@nice.com" //overwirte the value
// Object.freeze(JsUser)      //  makes object unchanged
JsUser.email = "ram@hello.com" 
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser)

*/

// object declared using constructors--> singletone

// const tinderUser = new Object() //singletone object
const tinderUser = {}  //non singletone object

tinderUser.id = "123abc" //adding  key and vlaue in object
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sha yam",
            lastname: "subedi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //it gives object inside object just like array
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  // merge using spread oprerator 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//json
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor}=course  //extract value from course with key courseInstructor you donot need to use  course.courseInstructor just use courseInstructor to get the value
//console.log(courseInstructor);

const {courseInstructor: instructor} = course //extract value with custom name as instructor

// console.log(courseInstructor);
console.log(instructor);

