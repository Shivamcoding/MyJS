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
//console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1999, edition: 2001 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1980, edition: 1999 },
    { title: 'Book Three', genre: 'Science', publish: 1997, edition: 2002 },
    { title: 'Book Four', genre: 'History', publish: 2001, edition: 2007 },
    { title: 'Book Five', genre: 'Science', publish: 2007, edition: 2010 },
    { title: 'Book Six', genre: 'Fiction', publish: 1990, edition: 2000 },
    { title: 'Book Seven', genre: 'History', publish: 1989, edition: 1990 },
    { title: 'Book Eight', genre: 'Non-Fiction', publish: 2009, edition: 2011 }
]

//const userBooks = books.filter( (bk) => bk.publish >= 1999 )

const userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
} )
console.log(userBooks);
