let value;

//Number to String
value = String(555);
value = String(4 + 4);

// Boolean to String
value = String(true);

//Date to String
value = String(new Date());

//Array to String 
value = String([1, 2, 3, 4, 5]);

// toString
value = (5).toString();
value = (true).toString();

//String to number
value = Number('5');
value = Number(true);
value = Number(false);
value = Number(null);
value = Number('hello');

value = parseInt('100.38');
value = parseFloat('100.38');

//output
console.log(value);
console.log(typeof value);
//console.log(value.length);
console.log("Print value after . :" + value.toFixed(2));

const valueOne = 5;
const valueTwo = 10;

const sum = valueOne + valueTwo;

console.log("Summation : " + sum);
console.log("Type of the value: " + typeof sum);

