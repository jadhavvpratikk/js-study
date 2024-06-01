// const score = 400
// console.log(score);//400
const balance = new Number(100)
// console.log(balance);//[Number: 100]
// console.log(balance.toFixed(2));//100.00 = means 2 decimal fixed value
// const newString = score.toString();//number is converted to string
// console.log(newString);//400 - but as a string
// console.log(typeof newString);//string
// console.log(newString.length);//3

//Precision is used to roundoff the multiple decimal value to single decimal value
// const number = 23.8956
// console.log(number.toPrecision(3));//23.9
// const number1 = 123.8956
// console.log(number1.toPrecision(3));//124
// const number2 = 1123.8956
// console.log(number2.toPrecision(3));//1.12e+3


// const hundreds = 100000
// console.log(hundreds.toLocaleString());//100,000 = output in standard format
// console.log(hundreds.toLocaleString('en-IN'));//1,00,000 = output in Indian standard format

//Maths
//console.log(Math);
// console.log(Math.abs(-4));//convert negative to positive number so output is 4 and positive remains positive only
// console.log(Math.round(4.3));//rounds to near round number here 4.3 becomes as 4
// console.log(Math.round(4.7));//rounds to near round number here 4.7 becomes to 5
//and if user want to control which num is output
//for highest number we use ceil function
//console.log(Math.ceil(4.3));//here output is compulsary 5 as upper value is considered
//for lowest number we use ceil function
//console.log(Math.floor(4.9));//here output is compulsary 4 as lower value is considered

// console.log(Math.min(4,5,3,1,9,11,6));//minimum element from array will be output = 1
// console.log(Math.max(4,5,3,1,9,11,6));//maximum element from array will be output = 11

// console.log(Math.random());//random number will be output between 0 and 1
// console.log((Math.random()*10) + 1);//random number will be multiply by 10 
// console.log(Math.floor(Math.random()*10) + 1);// here floor gives the lower value and we added 1 so we get value above 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//here we will get value between min and max












