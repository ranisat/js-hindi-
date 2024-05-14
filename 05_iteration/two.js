// while & do while loop
//  while loop check condition first than  get output 

let index = 0
while (index <= 10) {
    console.log(`value is while loop ${index}`);
    index = index + 2
}

// loop in array

let myArray = ["Abc", "Bcd", "Def", "Fish"]

let arr = 0
while (arr <myArray.length) {
    console.log(`value of while loop array ${myArray[arr]}`)
    arr = arr + 1
}

// Do While Loop 

//  first get output than check condition

let Score = 1
do {
   console.log(`score is ${Score}`) 
   Score++ ;
} while (Score < 10);