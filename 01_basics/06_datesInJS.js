// Dates object

let myDate = new Date()
//console.log(myDate);

//console.log(myDate.toString()); // Mon Sep 04 2023 09:51:58 GMT+0000

// console.log(myDate.toDateString()); // Mon Sep 04 2023

//console.log(myDate.toISOString()); // 2023-09-04T09:54:09.101Z

//console.log(myDate.toJSON()); // 2023-09-04T09:54:56.528Z

// console.log(myDate.toLocaleDateString()); // 9/4/2023

// console.log(myDate.toLocaleString()); // 9/4/2023, 9:56:37 AM

//console.log(myDate.toLocaleTimeString()); // 9:57:23 AM

//console.log(myDate.toTimeString()); // 09:58:06 GMT+0000

// console.log(myDate.toUTCString()); // Mon, 04 Sep 2023 09:58:44 GMT

// let myCreateDate = new Date(2023, 0, 25)
// console.log(myCreateDate.toDateString()); // Wed Jan 25 2023 Remember month starts from 0.

// let myCreateDate = new Date(2023, 0, 25, 5, 3)
// console.log(myCreateDate.toLocaleString()); // 1/25/2023, 5:03:00 AM

let myCreateDate = new Date("01-14-2023")
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());