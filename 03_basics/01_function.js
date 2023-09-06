// function addTwoNumbers(number1, number2) { // parameters in paranthesis
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // 7 arguments in paranthesis
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a

function loginUserMessage(username) {
    return `${username} just logged in`
}

// loginUserMessage("Shivam") // doesn't execute
//console.log(loginUserMessage("Shivam")) // execute
// console.log(loginUserMessage("")) //  just logged in
//console.log(loginUserMessage()) // undefined just logged in



function cartNumber(...num1) {  // ... is rest Opreator
    return num1
}

//console.log(cartNumber(200, 400, 500, 2000)) // [ 200, 400, 500, 2000 ]

const user = {
    username: "Shivam", price: 499 
}

function handleObject(UserName) { // UserName is not necessary you can put anything.
    console.log(`Username is ${UserName.username} and Price is ${UserName.price}`)
}

//handleObject(user); // Username is Shivam and Price is 499
//handleObject({ username: "Manan", price: 400 }) // Username is Manan and Price is 400

const myArray = [200, 300, 400]

function printSecondarray(getArray) {
    return getArray[1]
}

console.log(printSecondarray(myArray)) //  300

console.log(printSecondarray([300, 400, 700,])) // 400

