// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["superman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]); 

// myArr.push(6) // add 6 on last
// myArr.push(7)
// myArr.pop() // remove last element
// myArr.unshift(9) // add 9 on starting
// myArr.shift() // remove first element

//console.log(myArr.includes(9)); // false
//console.log(myArr.indexOf(9));// -1 (not found)

//const newArr = myArr.join() // 0,1,2,3,4,5 string

// console.log(myArr);
// console.log(newArr); 

// slice , splice

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1,3) // [1, 2]
console.log(myn1)
console.log("B ", myArr); //[0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1,3) // [1, 2, 3] but change existing array [0, 4, 5]
console.log(myn2)
console.log("C ", myArr);//[0, 4, 5]