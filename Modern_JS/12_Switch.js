const car = "Audi"

switch (car) {
    case "BMW":
        console.log('My Favorite Car is BMW');
        break;

    case "Hundai":
        console.log('My Favorite Car is Hundai');
        break;

    case "Ducati":
        console.log('My Favorite Car is Ducati');
        break;

    case "Ferrari":
        console.log('My Favorite Car is Ferrari');
        break;

    case "Rolls Royce":
        console.log('My Favorite Car is Rolls Royce');
        break;

    default:
        console.log('My Favorite Car is Undefined');
        break;
}


// use prompt for input

var day;

switch (new Date().getDate()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;

    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}


console.log(`Today is ${day}`);
