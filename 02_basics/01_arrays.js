//array
/*
In JS array is used to store elements of different datatype 
and it is resizeable array means dynamic in size'
index starts from 0
*/
//1st way to declare array
const myArray = [0,1,2,3,4,5];

console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ]
//console.log(myArray[1]);//1

//2nd way to declare array
const heroes = ["batman", "shaktiman", "spiderman", "hanuman"];

//3rd way to declare array
const names = new Array("Pratik", "Sameer", "Kiran", "Vinit");

//Array methods
// myArray.push(6);//to add element
// myArray.push(7);
// console.log(myArray);//[0, 1, 2, 3, 4, 5, 6, 7]
// myArray.pop();//remove last element
// console.log(myArray);//[0, 1, 2, 3, 4, 5, 6]

//slow performance of method when elements are more
//unshift method is used to add element at 0 index
// myArray.unshift(9);
// console.log(myArray);//[9, 0, 1, 2, 3, 4, 5]

// myArray.shift();//0 element is removed when it executed
// console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArray.includes(9));// it will search for 9 element in array if not present return false
// console.log(myArray.indexOf(9));//as 9 element is not available in array so indexof method return index as -1
// console.log(myArray.indexOf(5));//5

// const newArray = myArray.join();//return as string

// console.log(myArray);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArray);//0,1,2,3,4,5 = string as output with comma seperated
// console.log(typeof newArray);//string

//slice , splice

console.log("A ", myArray);








