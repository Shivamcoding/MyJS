// # Primitive 

// call by value
// 7 types : String, Number, Boolean, Null, Undefined, Symbol(make unique), BigInt.

// Is JS is dynamic or static ?
/* JavaScript is a dynamically typed language, 
 which means that data types of variables are 
 determined by the value they hold at runtime 
 and can change throughout the program as 
 we assign different values to them. */

 const score = 100
 const scorevalue = 100.3

 const isLoggedIn = false
  const outsideTemp = null
  let userEmail;

  const id = Symbol('123')
  const anotherId = Symbol('123')

  console.log(id === anotherId);

  const bigNumber = 24325373117349376n 

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros);


//**************************************************** 
// Memory
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "ShivamYadav"

let anothername = myYoutubename
anothername = "CodingBro"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com", upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Shivam@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);