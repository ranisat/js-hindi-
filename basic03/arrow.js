const user = {
    username : "Hitesh",
    price : 129,

    welcomeMessage :function(){
        console.log(`${this.username}, welcome to website`);
    //    console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

console.log(this);


function chai (){
    let username = "hitesh"
    console.log(this.username);  // output undefined
}
chai();

const chai =  () => {
    let username = "hitesh"
    console.log(this.username);  // output undefined
}
chai();

//============    arrow function syntax   () => {}     =======
// basic written function 
const addTwo = (num1, num2) =>{
   return num1 + num2
}

//emplasit written  - don't use  parathysis {}
// const addThree = (num1, num2) => num1 + num2
const addThree = (num1, num2) => (num1 + num2)   /// use {} use return keyword and () don't use return keyword
console.log(addTwo(5, 8));

