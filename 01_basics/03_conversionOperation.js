let score = "33abc"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score) // convert string into number
//console.log(typeof valueInNumber);

//console.log(valueInNumber); // output is NaN(not a number)

let isLoggedIn = "shivam"
let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn); 

// 1=> true; 0=> false
// "" => false
// "shivam" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//************************** Operations ***********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " shivam"

let str3 = str1 + str2
// console.log(str3);

// console.log("2" + 1);
// console.log(2 + "1");
// console.log(2 + 2 + "1");
// console.log("2" + 1 + 1);

let gameCounter = 100
gameCounter++; //PostFix increment
++gameCounter; //PreFix increment
console.log(gameCounter);