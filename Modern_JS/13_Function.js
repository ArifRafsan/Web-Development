/* Function Declaration */

function welcome(firtName = "Arif", lastName = "Ullah") {
    if (typeof firstName === undefined) {
        firstName = "Arif";
    }
    if (typeof lastName === undefined) {
        lastName = "Ullah";
    }

    return "Hello " + firtName + " " + lastName;
}

console.log(welcome());

/* Function Expressions */
const add = function (x = 3) {
    return x + x;
}

console.log(add());

/* Immediately Invokable function expressions - IIFEs*/
(function (name) {
    console.log('Hello ' + name);
})('Rafsan');

/* Property Method */
const todo = {
    add: function () {
        console.log('Add todo...');
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function () {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();