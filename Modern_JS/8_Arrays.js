//Create some arrays
const numbers = [45,55,65,35,25,15]
const numbers2 = new Array(22,32,42,11,18)
const fruit = ["Apple","Banana","Cheeries","Date"]
const mixed = [22,'hello', true, undefined,null, {a:1, b:1}, new Date()]


let value;


//Get array length
value = numbers.length;
//check if it is array
value = Array.isArray(numbers)

//Get Single Value
value = numbers[3]
value = numbers[0]

//insert into array
numbers[2] = 100;

//Find index of value
value = numbers.indexOf(36)

//MUTATING Arrays
//Add on to end
numbers.push(250);
//Add on to front
numbers.unshift(120);
// Take off from end
numbers.pop();
// Take off from front
numbers.shift()
// Splice values
numbers.splice(1,3)
// Reverse
numbers.reverse();

// Concatenate array
value = numbers.concat(numbers2);

//Sorting arrays
value = fruit.sort();
value = numbers.sort();

// Use the compare function
value = numbers.sort(function(x,y){
    return x - y;
})

// Reverse Sort
value = numbers.sort(function(x,y){
    return y - x;
})

// Find
function under30( number){
    return number < 30;
}

value = numbers.find(under30);

console.log(numbers);
console.log(value);

