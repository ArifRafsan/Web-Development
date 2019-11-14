/* Primitive Data Types*/
/*
    - Stored directly in the location the variable accesses 
    - Stored on the stack
*/

/* Reference Data Types: */
/*
    - Accessed by reference
    - Obejects that are stored on the heap
    - A pointer to a location in memory
*/

/* Primitive Data Types */
/*
    1. String
    2. Number
    3. Boolean
    4. Null 
    5. Undefined
    6. Symbols (ES6)
*/
// String
const name = "Rafsan";
//Number
const age = 26;
//boolean
const student = true;
//Null
const bike = null;
//undefined
let test;
//symbol
const sym = Symbol();

/* Reference Data Types / Objects */
/*
    1. Arrays
    2. Object Literals
    3. Functions
    4. Dates

*/
// Array
const hobbies = ['movies', 'sports','games'];
//Object literal
const address = {
    postOffice: "1209",
    thana:"Dhanmondi",
    city:"Dhaka",
    country:"Bangladesh"
}
//Date
const today = new Date();
console.log(today);
console.log(typeof today);


/* Dynamically Typed Language */
/*
    -> Types are associated with values not variables
    -> The same variable can hold multiple types
    -> We do not need to specify types
    -> Most other languages are statically typed (Java, C#, C++)
    -> There are supersets of JS and addons to allow static typing (TypeScript, Flow)
*/