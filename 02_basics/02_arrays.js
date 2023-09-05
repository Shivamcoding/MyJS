const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["flash", "superman", "batman"]

// marvel_heros.push(dc_heros); // ["thor", "spiderman", "ironman", ["flash", "superman", "batman"] ]
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros) // [ 'thor', 'spiderman', 'ironman', 'flash', 'superman', 'batman' ]
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operators

//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], [ 6, [ 7, 8, 9]]];

const real_another_array = another_array.flat(Infinity) // check the depth of array

//console.log(real_another_array);

console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
