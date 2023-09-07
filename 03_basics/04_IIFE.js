// Immediately Invoked Function Expressions (IIFE)

// jo function Immediately execute ho jaye (nhi bolna)
// Global scope k pollution se probem hoti h kai bar so uske problems ko htane k liye IIFE ka use krte hai.

(function addTwo() { // it's a name IIFE
   console.log( 3 + 4 );
})(); // 7

(() => { // it's a simple IIFE
    console.log( 5 + 4 );
 })(); // 9

 ((name) => {
    console.log(`Hii, I am ${name}`);
 })('Shivam'); // Hii, I am Shivam