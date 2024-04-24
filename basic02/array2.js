const marvel_heros = ["superman","Ironman","kingman"]
const dc_heros = ["minman","spiderman","routerman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);

// spred- value 

const all_new_heros = ["...marvel_heros", "...dc_heros"]
console.log(all_new_heros);

const another_array = [1,2,3,4, [5,7,7],8,[9,8,3,2,[6,4,2,1]]]

const newArray = another_array.flat(Infinity);
console.log(newArray);

// isArray convert to array

console.log(Array.isArray("welcome to world"));
console.log(Array.from("welcome to world"));



let score = 200
let score1 = 100
let score2 = 433

console.log(Array.of(score,score1,score2))