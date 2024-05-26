//Primitive type = Call by Value
// 7 types = String, Number, Boolean, null, undefined, Symbol, BigInt

/*
JavaScript is a dynamically typed language.

1. No Need for Explicit Type Declarations: 
let x = 42;       // x is a number
x = "Hello";      // now x is a string

2. Type Coercion:
console.log('5' + 5); // "55" (string concatenation)
console.log('5' - 3); // 2 (string '5' is coerced to number 5)

3. Run-Time Type Checking:
let y = "Hello";
console.log(y.length);  // 5 (valid)
y = 123;
console.log(y.length);  // undefined (valid, but might lead to runtime errors)
*/


// const id = Symbol('123');
// const anotherid = Symbol('123');
// console.log(typeof id);//symbol
// console.log(id);//Symbol(123)
// console.log(anotherid);//Symbol(123)
// console.log(id == anotherid);//false = Symbol data type makes the value unique to each variable
// console.log(id === anotherid);//false = Symbol data type makes the value unique to each variable

// const bigNumber = 32165478978945612378945612315975384267894561n // n used to represent bigint
// console.log(typeof bigNumber);//bigint

//Typeof operator 
//Reference Link = https://262.ecma-international.org/5.1/#sec-11.4.3

//Reference type = Non Primitive
// 3 types = Array, Objects, Functions
// Return typeof = Object type

//Array 
// const heroes = ["spiderman", "batman", "shaktiman"]
// console.log(heroes);// [ 'spiderman', 'batman', 'shaktiman' ]

//Objects
// let myObj = {
//     name : "Pratik",
//     age : "29"
// };
// console.log(myObj);// { name: 'Pratik', age: '29' }

//Functions
// const myFunction = function(){
//     console.log("hello world");
// }

// 3 types = Array, Objects, Functions
// Return typeof = Object type
// console.log(typeof heroes);//object
// console.log(typeof myObj);//object
// console.log(typeof myFunction);//function = for function it shows typeof as function










