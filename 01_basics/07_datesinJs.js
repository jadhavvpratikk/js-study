let myDate = new Date();
// console.log(myDate);//2024-06-01T08:16:00.664Z
// console.log(myDate.toString());//Sat Jun 01 2024 08:16:18 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sat Jun 01 2024
// console.log(myDate.toISOString());//2024-06-01T08:16:47.757Z
// console.log(myDate.toJSON());//2024-06-01T08:17:26.983Z
// console.log(myDate.toLocaleDateString());//6/1/2024
// console.log(myDate.toLocaleString());//6/1/2024, 8:18:31 AM
// console.log(myDate.toLocaleTimeString());//8:19:04 AM

//console.log(typeof myDate);//object

//let myCreated = new Date(2023,0,23);// 0 means months starts from 0 so January
//let myCreated = new Date(2023,11,23);//Dec month
//let myCreated = new Date("2023-11-23");//nov month
// let myCreated = new Date("01-11-2023");//indian format
// console.log(myCreated);//2023-01-23T00:00:00.000Zx  
// console.log(myCreated.toDateString());//Mon Jan 23 2023
// console.log(myCreated.toLocaleString());//11/23/2023, 12:00:00 AM

let myCreated = new Date("01-11-2023");//indian format
let myTimeStamp = Date.now();
// console.log(myTimeStamp);// it will calculate from January 1, 1970 till now the total milliseconds
// console.log(myCreated.getTime());// itis also in milliseconds

//Interview question to convert time in seconds
//console.log(Math.floor(Date.now()/1000));//1717232117


let newDate = new Date();
// console.log(newDate);//2024-06-01T08:56:42.914Z
// console.log(newDate.getDate());//1
// console.log(newDate.getDay());//6 = Saturday means 6
// console.log(newDate.getFullYear());//2024
// console.log(newDate.getHours());//8
// console.log(newDate.getMonth());// 5 means = June because 0 means January
// //solution for above month is add 1
// console.log(newDate.getMonth() + 1);


console.log(newDate.toLocaleString('default',{
    weekday: 'long'
}));







