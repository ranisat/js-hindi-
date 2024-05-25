// for of loop

let arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greeting = "Hello world"

for (const greet of greeting) {
    console.log(`Each Char of ${greet}`);
}

// Maps  (The Map object holds key-value pairs and remembers the original insertion order of the keys. )

const map = new Map()
map.set("IN", "India")
map.set("USA", "United state America")
map.set("FR", "France")

console.log(map)

// didn't add same value its a only print unique value

// key & value print

for (const [key, value] of map) {
    console.log(key, ":" , value);
    
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'ABC'
// }



