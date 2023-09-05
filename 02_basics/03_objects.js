// Objects Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    "lastname": "Yadav",
    age: 22,
    [mySym]: "myKey1",
    location: "Chandigarh",
    email: "abc123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email); // Execution 1

//console.log(JsUser["email"]); // Execution 2 (In this you can execute value, keys like "lastname")

// console.log(JsUser[mySym]);


JsUser.email = "abc123@google.com" // override
//Object.freeze(JsUser) // Freeze Objects so they can't change
JsUser.email = "abc123@microsoft.com" // can't override due to freeze

//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

//console.log(JsUser.greeting); // [Function (anonymous)]
//console.log(JsUser.greeting()); // Hello JS user

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // Stringe interpletion
}

console.log(JsUser.greetingTwo()); // Hello JS user, Shivam