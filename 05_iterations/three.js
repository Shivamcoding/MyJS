// For of loop

const name = ["Shivam", "Manan", "Vijay", "Sandeep"]

for (const num of name) { 
    //console.log(num); 
} 

const greeting = "Hello World"
for(const greet of greeting) {
    //console.log(`Each values is ${greet}`)
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "America")
map.set('Fr', "France")

//console.log(map); //{ 'In' => 'India', 'USA' => 'America', 'Fr' => 'France' }

for(const key of map) {
    //console.log(key);
}
// [ 'In', 'India' ]
// [ 'USA', 'America' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map) {
    //console.log(key, ':-', value);
}
// In :- India
// USA :- America
// Fr :- France

for(const key in map) {
    console.log(key);
}