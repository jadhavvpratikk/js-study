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

// Memory
// 2 types = Stack , Heap
// Stack = Primitive types = We get a copy of primitive type variable


// Heap = Non Primitive types / Reference types = we get a reference of non-primitive type

// let myName = "Pratik Jadhav"
// let anotherName = myName;//anotherName points to copy of value of myName

// console.log(myName);//Pratik Jadhav
// console.log(anotherName);//Pratik Jadhav

// anotherName = "Jadhav Pratik";//anotherName now points to copy of new value

// console.log(myName);//Pratik Jadhav
// console.log(anotherName);//Jadhav Pratik


//In Objects userOne is an object
// let userOne = {
//     email : "userone@gmail.com",
//     upi : "userone@hdfc"
// }

//userTwo is pointing to userOne
//let userTwo = userOne

//So it is a reference type when u change the value by userOne or userTwo
//So the value will be change and both of them will have same value as it is pointing to same reference

//Here u see when u change the value of userTwo
//By Dot (.) u access the object properties
//userTwo.email = "usertwo@yahoo.com"

//console.log(userOne.email);//Output : usertwo@yahoo.com
// u print the userOne it shows the updated value change by userTwo
//As it is pointing to same reference

//Also check the userTwo email
//console.log(userTwo.email);//Output : usertwo@yahoo.com


















