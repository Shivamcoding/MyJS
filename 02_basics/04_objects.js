//const tinderUser = new Object() // singleton object
const tinderUser = {} //  non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Shammi"
tinderUser.age = "23"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "abc123@gmail.com",
    fullname: {
        username: {
            firstname: "Shivam",
            lastname: "Yadav"
        }
    }
}

//console.log(regularUser.fullname.username);

const user1 = {1: "a", 2: "b"}
const user2 = {3: "a", 4: "b"}

//const user3 = Object.assign( user1, user2)
//const user3 = Object.assign({}, user1, user2)

const user3 = {...user1, ...user2}

//console.log(user3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'age', 'isLoggedIn' ]

// console.log(Object.values(tinderUser)); // [ '123abc', 'Shammi', '23', false ]

// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Shammi' ], [ 'age', '23' ], [ 'isLoggedIn', false ]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true 


//======================================================
 // Destructure Object
const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//const {courseInstructor} = course // Hitesh
//console.log(courseInstructor);

//const {courseInstructor: instructor} = course // Hitesh
//console.log(instructor);




