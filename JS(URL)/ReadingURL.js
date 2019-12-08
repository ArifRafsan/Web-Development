//creating new url object from the current url
//let url1 = new URL(document.URL);

//creating new URL object from a string
let url = new URL("https://usefulangle.com/post/78/javascript-get-url-parameters");

//url protocol
console.log("Getting url protocol: "+url.protocol);

console.log("Getting url hostname: "+url.hostname);

console.log("Getting url pathname: "+url.pathname);

console.log("Getting url query string & parameter: "+url.search);

//new URLSearchParams from query string
let search_params = new URLSearchParams(url.search)

for( let i of search_params){
    console.log(i[0]+' : '+i[1]);
    
}

//hash / fragment
var post_url = new URL('https://usefulangle.com/post/78/javascript-get-url-parameters?id=123&type=post#container');


console.log(post_url.hash);