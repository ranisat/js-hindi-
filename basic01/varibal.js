const accountId = 154453
let accountEmail = "rani@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"


// accountId = 2

// Prefer not use var 
// bacause of issue in block scope and functional scope

console.log(accountEmail);

accountEmail = "abc@gmail.com"
accountPassword = "313131"
accountCity = "india"

console.table([accountId, accountEmail, accountPassword, accountCity])
