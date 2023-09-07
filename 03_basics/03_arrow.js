const user = {
    username: "Shivam", age: 22, message: function() {
        console.log(`I am ${this.username} and I am ${this.age}.`)
        console.log(this)
    }
}

// user.message() // I am Shivam and I am 22.

// user.username = "Sam"
// user.message() // I am Sam and I am 22.

// console.log(this)

// function chai() {
//     let username = "shivam"
//     console.log(this.username)
// }
// chai() // undefined

//  const chai = () => {
//     let username = "shivam"
//     console.log(this.username)
// }
// chai() // undefined

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4)) // 7

// const addTwo = (num1, num2) => ( num1 + num2 )

// console.log(addTwo(3,4)) // 7

// const addTwo = (num1, num2) =>  num1 + num2 
//  console.log(addTwo(3,4)) // 7

