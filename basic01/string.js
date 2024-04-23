const name = "Rani"
const repoCount = 30;

// console.log(name + repoCount + " value");/

// outdated formula

// latest formula
// `` backticks
console.log(`my name is ${name} and my repocount ${repoCount}`);

// string interpreted

const gameName = new String("Ranirs");

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = " rani "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh20%choudhary"

console.log(url.replace('20%', '-'));
console.log(url.includes('hitesh'));
console.log(gameName.split('-'));







