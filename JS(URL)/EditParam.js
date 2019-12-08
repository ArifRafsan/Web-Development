let url = new URL('http://demourl.com/path?id=100&topic=main');

let query_string = url.search;

let search_params = new URLSearchParams(query_string);

//new value of "id" is set to '101'
search_params.set('id','101');

//change the search property of the main url
url.search = search_params.toString();

//the new url string
let new_url = url.toString();

//output
console.log(new_url);


