const numberOne = 100;
console.log("First Number :" + numberOne);
const numberTwo = 50;
console.log("Second Number :" + numberTwo);

let value;

console.log("----------Simple Math Calculation--------------");
//Simple Math With Numbers
value = numberOne + numberTwo;
console.log("Addition :" + value);
value = numberOne * numberTwo;
console.log("Multiplication :" + value);
value = numberOne - numberTwo;
console.log("Subtraction :" + value);
value = numberOne / numberTwo;
console.log("Division :" + value);
value = numberOne % numberTwo;
console.log("Modulus :" + value);


//Math Object
console.log("-------Math Object--------");
value = Math.PI;
console.log("value of PI :" + value);

value = Math.E;
console.log("value of E :" + value);
value = Math.round(2.4);
console.log("round of a number 2.4 :" + value);
value = Math.ceil(2.4);
console.log("ceil of a number 2.4 :" + value);
value = Math.floor(2.8);
console.log("floor of a number 2.8 :" + value);

value = Math.sqrt(64);
console.log("squre root of a number 64 :" + value);

value = Math.abs(-3);
console.log("ceil of a number 2.4 :" + value);

value = Math.pow(8, 2);
console.log("power of a number base 8 power 2 :" + value);

value = Math.min(2, 33, 50, 45, 5, 67, 6, 8);
console.log("minmum:" + value);

value = Math.max(8, 2, 10, 24, 5, 6, 7, 8, 90);
console.log("maximum :" + value);

value = Math.random();
console.log("random:" + value);


value = Math.floor(Math.random() * 20 + 1);
console.log("random value and then floor it :" + value);
