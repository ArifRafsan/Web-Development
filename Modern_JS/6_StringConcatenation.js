const firstName = 'Arif';
const lastName = "ullah";
const age = 25;

let value;

value = firstName + lastName;

//Concatenation
value = firstName + ' ' + lastName;

//Append
value = 'Rafsan';
value += 'Ullah'

value = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(value);

//Escaping
let escape = " That\'s awesome, I can\'t wait";
console.log(escape);

//length
console.log("First Name : " + firstName + ", length is :" + firstName.length);

//concat
console.log("first name concat with lastname : " + firstName.concat(' ', lastName));

//change case

console.log("Uppercase: " + firstName.toUpperCase());
console.log("Lowercase: " + firstName.toLowerCase());

//indexOf

console.log("Position of index:" + firstName.indexOf('f'));

//charAt

console.log("Position of character:" + firstName.charAt('3'));

//Get last character
console.log("last character of " + firstName + " is :" + firstName.charAt(firstName.length - 1));

//substring
console.log("Substring:" + firstName.substring(0, 4));

//Slice
console.log("Slice:" + firstName.slice(0, 4));
console.log("Slice:" + firstName.slice(-3));

//Split
const str = ' Hello there my name is Rafsan';
const tags = 'Web Design, web development, programming';
console.log("String split:" + str.split(' '));
console.log("tags split:" + tags.split(','));

//replace()
console.log("replace:" + str.replace('Rafsan', 'Arif'));

//includes
console.log("includes:" + str.includes('ullah'));


