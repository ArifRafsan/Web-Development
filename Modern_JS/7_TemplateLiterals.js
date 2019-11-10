const name = 'Rafsan';
const age = 25;
const job = 'Software Engineer';
const city = 'Dhaka';
let html;

//Without template strings (es5)
html = '<ul><li>Name:' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';


function hello() {
    return 'hello';
}
//With template strings (es6)
html = `<ul>
            <li>Name:${name}</li>
            <li>Age:${age}</li>
            <li>Job:${job}</li>
            <li>City:${city}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'over 30' : 'under 30'}</li>

        </ul>`;

document.body.innerHTML = html;
