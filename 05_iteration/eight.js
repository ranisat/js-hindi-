//Array  reduce method

const myNums = [1,2,3,4]

// accumlator -  1
// currentvalue - 2    (1 acc hai or useme 2 add ho raha hai to wo curr val hai 2 ki curr val 3 3 ki 4 yesa)

const myTotal = myNums.reduce(function (acc, currval){
  console.log(`acc: ${acc} and currval:${currval}`);
  return acc + currval
}, 0)
console.log(myTotal);

// reduce in array

const myVar = myNums.reduce( (acc, curr) => acc+curr, 0 )
console.log(myVar);

// reduce in shopping cart

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "py course",
        price : 9999
    },
    {
        itemName : "react course",
        price :40000
    },
    {
        itemName : "data science course",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.
price, 0)
console.log(priceToPay);