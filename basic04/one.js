

//if

const isUserloggedIn = true

const temperature = 41

if (temperature === 40) {
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50")
}
// console.log("hi javascript");
// < : less than
// > : greater than
// <= : less than & equal
// >= : greater than & eual
// == : eual
// != : not equal
// === : check type & equal


// const score = 200

// if (score >100) {
//     const power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)


//  short hand notation

const balance = 1000

if (balance > 500) console.log("test");  // called inplicit scope man liya hai but excute in one line

//if (balance > 500) console.log("test"),
//console.log("test2");  // this not good practice
    

if (balance < 500) {
    console.log("less than");
} else if(balance < 750){
 console.log("less than 750");
}else if(balance < 900){
    console.log("less than 750");
}else{
    console.log("less than 1200");
}


// && statement  (both all statement are true)

const userloggedIn = true
const debitcard = true

if (userloggedIn && debitcard) {
    console.log("Allow to buy course");
}

// || statement  (one statement true)


const loggedInfromGoogle = true
const debitcardfromEmail = true

if (loggedInfromGoogle || debitcardfromEmail) {
    console.log("User Log In");
}
