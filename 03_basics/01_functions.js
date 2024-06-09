// function sayName(){
//     console.log("P");
//     console.log("R");
//     console.log("A");
//     console.log("T");
//     console.log("I");
//     console.log("K");
// };

// sayName();

// function addNumber(number1 , number2){
//     console.log(number1 + number2);
// }

// addNumber(5,5);//10
// addNumber(3 , "5");//35

// const result = addNumber(5,5);
// console.log("Result : " + result);//Result : undefined

function addNumber(number1 , number2){
    // let result = number1 + number2;
    // return result;//After return statement no code will be executed

    return number1 + number2;
}

const result = addNumber(7,7);
// console.log("Result : " + result);//Result : 14 because of return keyword

function loginUserMessage(username = "sam"){ // sam is default value if no value is passed in function 
                                            // so  loginUserMessage() = sam just logged in
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Pratik"));//Pratik just logged in
// console.log(loginUserMessage(""));// just logged in
// console.log(loginUserMessage());//undefined just logged in

// console.log(loginUserMessage("Pratik"));
console.log(loginUserMessage());
//Please enter a username
//undefined













