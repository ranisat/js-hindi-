const userEmail = "abc@gmail.com"

if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Don't have user email");
}

// falsy value

// false, 0, -0, null, undefined, "", BigInt 0n, NaN

// Truthy value

// "0", 'false', " "(add space in string), [], {}, function(){}

// use array in conditions

const userArray = []
if (userArray.length === 0) {
    console.log("Array is Empty");
}

// use objects in conditions

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}


// nulish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// ?? user for database se  call ki gyi value null ya undefined mili to code structure bigad jata hai to use ke liye ye banaya hai


// ternary operator

condition ? true : false

const iceTea = 100

iceTea >= 50 ? console.log("less than 80") : console.log("more than 80");