const username = [];

if (username) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values : false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values : "0", "false", " ", [], {}, function(){}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
// val1 = undefined ?? 10

console.log(val1);


// Terniary Operator

//condition ? true : false

const num = 100;

num <= 80 ? console.log("less than 80") : console.log("More than 80")
