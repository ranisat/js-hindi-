// const tinderuser =  new Object()    ======== singleton object

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "rani"
tinderuser.isLogged = false

console.log(tinderuser);

const regularUser = {
    email : "abc@gmail.com",
    fullname :{
        username:"abc",
        age:10,
        mail:"abc@gmail.com"
    }
}

// console.log(regularUser.fullname);

const obj1 = {1 : "a", 2 :"b"}
const obj2 = {3 :"c", 4:"d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 ={...obj1, ...obj2}
console.log(obj3);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));
console.log(Object.values(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));

// object de-structure


const course = {
    coursename:"js in hindi",
    price :"999",
    courseInstructor:"hitesh"
}
const {courseInstructor : instructor} = course
console.log(courseInstructor);

console.log(instructor);

// JSON - javascript object notation 
// API - Application programming interface
// object API


// {
//  "name": "hitesh",
//  "price":"free",
//  "coursename":"js in hindi"
// }

// Array API

// [
//     {},
//     {},
//     {}
// ]





