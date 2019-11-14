const person = {
    firstName: "Mohammad Arif",
    lastName: "Ullah",
    age: 26,
    email: "rafsan9994@gmail.com",
    hobbies: ['reading books','movies'],
    address:{
        city: "Dhaka",
        state: "Dhanmondi"
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}


let value;

value = person;
// Get Specific value
value = person.firstName;
console.log("First Name:"+ value);

value = person["lastName"];
console.log("Last Name:"+ value);
value = person.age;
console.log("Age:"+value)
value = person.hobbies[1];
console.log("Hobbies:"+value)
value = person.getBirthYear();
console.log("Birth Year:"+value);


// Multiple value
const people = [
    {name:"Roman", age: 28},
    {name:"Rafsan", age: 26},
    {name:"Rana", age: 24}
]

for( let i = 0; i < people.length; i++){
    console.log("People Name:"+people[i].name);
    
}