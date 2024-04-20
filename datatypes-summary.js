// # Primitive

//   7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined
  const id = Symbol('123')
  const anotherId = Symbol('123')

//   both are out put different

console.log(id === anotherId);

const bigNumber = 3245674235657n


// # Reference (Non Primitive)

//  Array, Objects, Functions

// Array 

 const heros = ["shaktiman","naagraj","doga"];
 console.log(heros);

 // Objects 

 let myObj = {
    name : "Rani",
    age : 18,
    city : "pune",
    state : "india"

 }
 console.log(myObj);

 // Functions

 const myFunction = function(){
    console.log("hello world");
 }
 

 console.log(typeof score);  // check all datatype here....