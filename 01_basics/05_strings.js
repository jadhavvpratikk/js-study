// let name = "Pratik"
// const repoCount = 50

//console.log(name + repoCount + " Pushed"); = Not Recommended

//console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);
//Hello my name is PRATIK and my repoCount is 50
//console.log(`Hello my name is ${name.toLowerCase()} and my repoCount is ${repoCount}`);
//Hello my name is pratik and my repoCount is 50

//New way of declaring String 
//const gameName = new String ('GTA Vice-City')
// console.log(gameName);
// console.log(gameName[0]);//G

//String methods
// console.log(gameName.__proto__);//{}

// console.log(gameName.lastIndexOf('e'));//7

// console.log(gameName.length);//13

// console.log(gameName.charAt(4));//V is at 4th index in string gameName

// console.log(gameName.indexOf('T'));//1 is the index of T alphabet in String gameName

// console.log(gameName.toUpperCase());//GTA VICE CITY

// console.log(gameName.toLowerCase());//gta vice city

//Original value of gameName is not changed, it takes a copy of it and changes the value of copy

//const newString = gameName.substring(4,13);//In SubString dont allow negative value it starts from 0th index
//13 because it doesnt include the 13 index of String 
//console.log(newString);//Vice-City

//const sliceString = gameName.slice(0,4);//4 because it doesnt include the 4 index of String
//console.log(sliceString);//GTA

//const negativeSlice = gameName.slice(-13,-10);
//In slice, -10 means it goes in reverse direction = -13 means G, -12 means T, -11 means A
//because it doesnt include the -10 index of String
//console.log(negativeSlice);//GTA

// const stringOne = "   pratik     "
// console.log(stringOne);//   pratik      - with whitespaces
// console.log(stringOne.trim());//pratik - with no whitespaces

// const url = "https://pratik.com/pratik%20jadhav"
// console.log(url.replace("%20","-"));//https://pratik.com/pratik-jadhav - %20 is replaced by -

// console.log(url.includes("pratik"));//true

// const splitName = "Pratik-Harichandra-Jadhav"
// console.log(splitName.split("-"));//[ 'Pratik', 'Harichandra', 'Jadhav' ]














