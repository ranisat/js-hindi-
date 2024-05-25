// for in loop  in object
const myObject = {
    js: "Javascript",
    ry:'ruby',
    jquery:'Jquery',
    react: 'react App'
}

for (const key in myObject) {
   console.log(`${key} key or value ${myObject[key]}`);
}

// for in loop in array

const programme =["js","React","Cpp","Java"]

for (const key in programme) {
   console.log(programme[key])
}