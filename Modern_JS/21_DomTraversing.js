let value;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

value = listItem;
value = list;

//Get child nodes 
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[0].nodeName;
value = list.childNodes[1].nodeType;

//Get children element nodes
value = list.children;
value = list.children[1];
list.children[1].textContent = 'Hello';

//children of children
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0]

//First Child
value = list.firstChild;
value = list.firstElementChild

//Last Child
value = list.lastChild;
value = list.lastElementChild

//count child elements.
value = list.childElementCount

//Get parent node
value = listItem.parentNode
value = listItem.parentElement
value = listItem.parentElement.parentElement

//Get Next Sibling
value = listItem.nextSibling
value = listItem.nextElementSibling.nextElementSibling

//Get Prev Sibling
value = listItem.previousSibling
value = listItem.previousElementSibling



console.log(value);


