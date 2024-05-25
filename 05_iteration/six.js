// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

let newNums = myNums.filter( (num) => num < 4) // check conditioms
    console.log(newNums);

let newNum = myNums.filter( (num) => {
   return num > 4
}) // when use curly braces(scope) write return key world
    console.log(newNum);   
    
// use forEach loop

const newKey = []

myNums.forEach( (num) => {
if(num >4){
    newKey.push(num)
}
})
console.log(newKey);


// filter map 

const books = [
    {title : 'Book One', Genre : 'Fiction', published : '1981'},
    {title : 'Book Two', Genre : 'Non-Fiction', published : '1992'},
    {title : 'Book Three', Genre : 'History', published : '1995'},
    {title : 'Book Four', Genre : 'Non-Fiction', published : '1997'},
    {title : 'Book Five', Genre : 'Science', published : '2000'},
    {title : 'Book Six', Genre : 'Fiction', published : '2004'},
    {title : 'Book Seven', Genre : 'History', published : '2005'},
    {title : 'Book Eight', Genre : 'Science', published : '2008'},
    {title : 'Book Nine', Genre : 'Non-Fiction', published : '2014'},
]

const userBooks = books.filter( (bk) => bk.Genre === 'History')
const publish = books.filter( (bk) => {
    return bk.published >= 2000 && bk.Genre === "History"
})
console.log(userBooks);
console.log(publish);