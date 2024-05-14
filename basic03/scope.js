var a = 10
// let b = 400
// const c = 500

if (true) {
    var a = 300
let b = 400
const c = 500

console.log("Inner",a)
}

// var not use because var declare scope every where defined value and let declare scope defined block value
// console.log(a);
// console.log(a);
// console.log(c);

function one(){
    const username = "rani"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "rani"
    if (username === "rani") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++  interesting +++++++++++++

function addone(num1){
  return num1 + 1
}
console.log(9);


const addTwo = function(num){
    return num + 2
}

addTwo(2);