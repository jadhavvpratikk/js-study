// let score = "33ab"
// console.log(typeof score);//string
// console.log(typeof(score));//string

// let valueInNumber = Number(score)//score was of String type and now converted to Number type
// console.log(typeof valueInNumber);//score = "33ab" it shows type of number and when we print the value it shows string+number
// console.log(valueInNumber);//Nan is output when we store score = "33ab"


// let score = null
// console.log(typeof score);//object
// console.log(typeof(score));//object

// let valueInNumber = Number(score)//score was of object type and now converted to Number type
// console.log(typeof valueInNumber);//score = null it shows type of number and when we print the value it shows 0
// console.log(valueInNumber);//0 is output when we store score = null


// let score = undefined
// console.log(typeof score);//undefined
// console.log(typeof(score));//undefined

// let valueInNumber = Number(score)//score was of undefined type and now converted to Number type
// console.log(typeof valueInNumber);//score = undefined it shows type of number and when we print the value it shows NaN
// console.log(valueInNumber);//NaN is output when we store score = undefined


// let score = true
// console.log(typeof score);//boolean
// console.log(typeof(score));//boolean

// let valueInNumber = Number(score)//score was of boolean type and now converted to Number type
// console.log(typeof valueInNumber);//score = true it shows type of number and when we print the value it shows 1
// console.log(valueInNumber);//1 is output when we store score = true , true means 1 and false means 0


// let score = "pratik"
// console.log(typeof score);//string
// console.log(typeof(score));//string

// let valueInNumber = Number(score)//score was of string type and now converted to Number type
// console.log(typeof valueInNumber);//score = "pratik" it shows type of number and when we print the value it shows NaN
// console.log(valueInNumber);//NaN is output when we store score = "pratik"

// let score = "33"
// console.log(typeof score);//string
// console.log(typeof(score));//string

// let valueInNumber = Number(score)//score was of string type and now converted to Number type
// console.log(typeof valueInNumber);//score = "33" it shows type of number and when we print the value it shows 33
// console.log(valueInNumber);//33 is output when we store score = "33"

/*
Input => Output
"33" => 33
"33ab" => NaN
true => 1 , false => 0
null => 0
undefined => NaN
"pratik" => NaN
*/

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//1 - true, except 0 any other number it give output as true eg - 65, 100


// let isLoggedIn = 0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//0 - false


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//"" - empty String - false


let isLoggedIn = "pratik"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//"pratik" - full String - true



