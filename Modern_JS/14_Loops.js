/* for loop */

console.log('====================================');
console.log("For loop structure");
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
        continue;
    }

    if (i === 5) {
        console.log('Stop the loop');
        break
    }
    console.log('Number: ' + i);
}
console.log('====================================');

/* While loop */
console.log('====================================');
console.log("While loop example");
let i = 0;

while (i < 10) {
    i++;
    console.log('Number: ' + i);
}
console.log('====================================');

/* Do While */
console.log('====================================');
console.log("Do While Loop Example");

let x = 100;
do {
    console.log('Number: ' + x);
    x++;
} while (x < 10)
console.log('====================================');

/* Loop using array */
const cars = ['Mazda', 'BMW', 'Ford', 'Audi']

console.log("For loop using array");
for (let c = 0; c < cars.length; c++) {
    console.log(cars[i]);
}

console.log("For each using array");
cars.forEach(function (car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
})

/* Map */
console.log('====================================');
console.log("Map Example");
const people = [
    { id: 1, name: 'Rafsan' },
    { id: 2, name: 'Roman' },
    { id: 3, name: 'Rana' },
    { id: 4, name: 'Rahim' },
]

const peopleID = people.map(function (person) {
    return person.id
})

console.log("People ID: " + peopleID);
console.log('====================================');

/* for in */
console.log('====================================');
console.log("-----for in example-----");
const user = {
    firstName: "Arif",
    lastName: "Ullah",
    age: 26
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}
console.log('====================================');
