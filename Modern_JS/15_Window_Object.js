//WINDOW METHODS / Objects / Properties

window.console.log(123);

//Alert
alert('Hello Alien');

//Prompt
const input = prompt();
alert(input)

// Confirm
if(confirm('Are you sure')){
    console.log('YES');
}else{
    console.log('NO');
}

//
let value;

//Outer height and width
value = window.outerHeight;
value = window.outerWidth;

//Inner height and width
value = window.innerHeight;
value = window.innerWidth;

//Scroll Points
value = window.scrollY;
value = window.scrollX;

//Location Object
value = window.location;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;
value = window.location.search;

//Redirect
window.location.href = "http://google.com"
//Reload
//window.location.reload();

//History Object
window.history.go(-2)
window.history.length;

//Navigator Object
value = window.navigator;
value = window.navigator.appName;
value = window.navigator.appVersion;
value = window.navigator.userAgent;
value = window.navigator.platform;
value = window.navigator.vendor;
value = window.navigator.language;




console.log(value);



