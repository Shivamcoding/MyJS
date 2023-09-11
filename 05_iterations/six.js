const coding = ["js", "ruby", "java", "python", "cpp"]

// const myCoding = coding.forEach(element => {
//     console.log(element);
// })

// console.log(myCoding);

const myNum = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNum.filter( num => num > 4 ) // [ 5, 6, 7, 8, 9, 10 ]

//const newNums = myNum.filter( (num) => (num > 4) ) //[ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNum.filter( (num) => {
//     return num > 4 // [ 5, 6, 7, 8, 9, 10 ]
// } )

const newNums = []

myNum.forEach((num) => {
    if(num > 4) {
        newNums.push(num) // [ 5, 6, 7, 8, 9, 10 ]
    }
})
console.log(newNums);
