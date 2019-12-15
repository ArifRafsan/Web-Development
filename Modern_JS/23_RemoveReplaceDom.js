//Replace Element


//Create Element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = "task-title"

//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action')

//Replace
cardAction.removeChild(newHeading,oldHeading)

//Remove element
const lis = document.querySelectorAll('li')
const list = document.querySelector('ui')

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]);

//classes and attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value;


//Classes
value = link.className;
value = link.classList;
value = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
value = link;

//Attributes
value = link.getAttribute('href');
value = link.getAttribute('href', 'http://google.com');
link.setAttribute('title','google');
value = link.hasAttribute('title');
link.removeAttribute('title')
value = link;