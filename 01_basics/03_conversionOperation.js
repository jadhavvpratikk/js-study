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


// let isLoggedIn = "pratik"
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);//"pratik" - full String - true

// let someNumber = 33//number
// console.log(typeof someNumber);//number
// let stringNumber = String(someNumber)//number to String conversion
// console.log(stringNumber);//33 as string
// console.log(typeof stringNumber);//string


//Operations
// let value = 3
// let negValue = -value
// console.log(negValue);//-3
// console.log(2+2);//4
// console.log(1-2);//-1
// console.log(2*2);//4
// console.log(2**4);//2 power of 4 is 16 => 2*2*2*2 = 16
// console.log(10/2);//5 = Quotient
// console.log(5%2);//1 = Remainder

// let str1 = "hello"

// let str2 = " pratik"

// let str3 = str1 + str2

// console.log(str3)//hello pratik

// console.log(1 + "2");//12 = number has 1 element and string has one element but string has the priority first 
// console.log(typeof (1 + "2"));//string

// console.log("1" + 2);//12 = string has one element but string has the priority first and number has 1 element
// console.log(typeof ("1" + 2));//string

// console.log("1" + 2 + 2);//122 = String has the priority first because of inverted commas is the first element 
//                         //and then number has 2 elements

// console.log(1 + 2 + "2");//32 = Number has the priority first because of number is with the 2 elements

//Tricky Conversion

// console.log(true);//true
// console.log(+true);//1
// //console.log(true+);//exception
// console.log(+"");//0


//Not recommendedto write below code
// let num1, num2, num3
// num1 = num2 = num3 = 2+2
// console.log(num1,num2,num3);


// let gameCounter = 100
// gameCounter++
// console.log(gameCounter);//101

//Postfix and Prefix
//Reference Link = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//Reference Link = https://tc39.es/ecma262/#sec-type-conversion

// let x = 3
// let y = x++//y=3
// //here x = 4 because of postfix
// console.log(`x = ${x} and y = ${y}`);//Postfix means after x++ line it changes x = 3 value to 4 

// let a = 3
// let b = ++a//a = 4 because of prefix and b = 4 
// console.log(`a = ${a} and b = ${b}`);//prefix means before ++x line it changes x = 3 value to 4
