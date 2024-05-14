// function addNumber(number1, number2){
//    console.log(number1 + number2)
// }
// addNumber(5, 8)


function addNumber(number1, number2){
    let result = number1 + number2
    console.log(result); // it's a print
    return result 
    console.log(result); // not a print because already upon defined return that way  

 }
 const result = addNumber(5, 8);
 console.log("Result", result);

 function loginuser(username){
    return `${username} just logged in`
 }

console.log(loginuser("hitesh"))

function cartpricevalue(val1, val2, ...num1) // ... spred / rest operator
{
    return num1
}

console.log(cartpricevalue(100,200,300,320))

// add to object in fuction 

const user = {
    username :"hitesh",
    price : 999
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} price is a ${anyobject.price}`)
}
// handleObject(user)

// issa bhi kr sakte hai

handleObject({
    username : "rani",
    price:2333
})


// add to Array in function

const myNewArray = [100,300,400,600]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray)); // first method

console.log(returnSecondValue([100,300,400,600]))