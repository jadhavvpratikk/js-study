const accountId = 123456
let accountEmail = "pratikjadhav6396@gmail.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

/*
Prefer not to use var
because of issue in block and functional scope
*/

//accountId = 789 // not allowed to const
accountEmail = "pratik@gmail.com"

accountPassword = "111111"

accountCity = "Pune"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
