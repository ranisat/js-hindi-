// for Each loop

const coding = ["js","java","pythn","html"]

coding.forEach(function (val){
    console.log(val)
})

// using arrow function


coding.forEach((item) => {
    console.log(item)
})

coding.forEach( (item, index, arr)=>{
console.log(item, index, arr);
})

// using object format in array

const myCoding = [
    {
     language : "javascript",
     langfile : 'js'
    },
    {
            language : "java",
            langfile : 'java'
        },
        {
            language : "pythan",
            langfile : 'py'
        },
]

myCoding.forEach( (item)=>{
    console.log(item.language)
})