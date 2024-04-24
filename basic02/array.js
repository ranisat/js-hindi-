const myArr = [0,1,2,3,5]
const heros = ["rohan","rani","deepika","kk"]
const myArr2 = new Array (1,2,3,4,5);


console.log(heros);
console.log(myArr[1]);
  

// Array methods

// push - add value in array

myArr.push(6)
console.log(myArr);

// pop - remove last value in array

myArr.pop()
console.log(myArr);

// unshift - add start value in array
// shift - remove added value in array
myArr.unshift(5);
myArr.shift()
console.log(myArr);

// includes - check value exist 
// indexOf - check existing value place
console.log(myArr.includes(5));
console.log(myArr.indexOf(6));

// join - convert to array string data type
const newArray = myArr.join()
console.log(newArray);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
 console.log(myn2);


