/*
    Basic Syntax

    if(something){
        do something
    }else{
        do something else
    }

*/
// Equal to
const id = 100;
if( id == 100){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// Not Equal to
if( id != 101){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// Equal to value & Type
if( id === 100){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// Equal to value & Type
if( id !== 100){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// Test if undefined
if(typeof id !== undefined){
    console.log(`THE ID IS ${id}`);
}else{
    console.log('NO ID');
}

// Greater or less than
if( id > 200){
    console.log('CORRECT');
}else{
    console.log('INCORRECT');
}

// if, else, else if

const color = "Black";

if(color === 'red'){
    console.log('color is red');
}else if (color === 'blue'){
    console.log('color is blue');
}else{
    console.log('color is not red or blue');
}

// Logical operator

const name = 'Rafsan'
const age = 25

// AND &&
if( age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if (age >= 13 && age <=19){
    console.log(`${name} is a teenager`);   
}else{
    console.log(`${name} is an adult`);
}

// OR || 
if( age < 16 || age > 65){
    console.log(`${name} can not run in a race`);
}else{
    console.log(`${name} is registered for the race`);    
}

// TERNARY OPERATOR
console.log( id === 100  ? 'CORRECT' : 'INCORRECT');

// Without Braces
if( id === 100 )
    console.log("CORRECT");
else
    console.log("INCORRECT");
    