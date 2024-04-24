// singleton
// object.create create singleton object in object.create


// objects literals
// {} - called object

//  how to add symbol in object 1) declare symbol
// add [] bracket in object key 

const mySym = Symbol("key1");


const Userinfo = {
   name : "Hello world",
   "full name" : "hello world here",
   age : 18,
   [mySym]:"mykey1",
   location : "Pune",
   mail : "rani@gmail.com",
   isLoggedIn : false,
   lastLoginDays : ["Monday", "Sunday"]
}

console.log(Userinfo.age);  // is not good practice
console.log(Userinfo["mail"]) // it's good practice
console.log(Userinfo["full name"]) // it's good practice
console.log(Userinfo[mySym])

// change value

Userinfo.mail = "rani@gmail.com";
// value ko freeze krne ke liye
Object.freeze(Userinfo);
console.log(Userinfo)

// add functin in objects

Userinfo.greeting = function(){
    console.log("hello Js User");
}
Userinfo.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`);
}

console.log(Userinfo.greeting());
console.log(Userinfo.greetingTwo());



