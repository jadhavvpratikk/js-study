//two ways to crrate object
//singleton - which u create from constructor & not from literals
//Object.create = used in singleton



//object literals it contains keys and value pair
const mySymbol = Symbol("key1");
//console.log(typeof mySymbol);//symbol
const JsUsers = {
    name : "Pratik",
    "full Name": "Pratik Jadhav",
    [mySymbol] : "myKey1",// now it is used as a symbol
    age: 29,
    location: "Mumbai",
    email: "pratik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUsers);// here it shows mySymbol as symbol
// above is a object
// to access object properties with dot operator - not recommended
//console.log(JsUsers.lastLoginDays[0]);//Monday

//to access object using string
//console.log(JsUsers["full Name"]);//Pratik Jadhav
//console.log(JsUsers["email"]);//it will consider email as property key = pratik@gmail.com
//console.log(JsUsers.mySymbol);//myKey1
// console.log(typeof JsUsers.mySymbol);//string
// console.log(typeof JsUsers.age);//number

//but if we want symbol as data type use [mySymbol] to key and need to use with square bracket only
// console.log(JsUsers[mySymbol]);//myKey1
// console.log(typeof JsUsers[mySymbol]);//string 

//to change the value in object
//JsUsers.email = "pratik6396@gmail.com";
//console.log(JsUsers.email);//pratik6396@gmail.com

//but if u want to lock object means dont want anyone to change the value of objects = use freeze method
//Object.freeze(JsUsers);

//JsUsers.email = "pratik631996@gmail.com";
//console.log(JsUsers.email);//pratik6396@gmail.com = value is not changed because of lock and use of freeze method

JsUsers.greeting = function(){
    console.log("Hello inside greeting");
}
console.log(JsUsers.greeting);//[Function (anonymous)] = means function is not executed it reference is return back
