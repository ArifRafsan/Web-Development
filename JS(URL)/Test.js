const id = "500"
const topic = "number"
let url = new URL(`http://demourl.com/path?id=100&topic=main`);


let search_params = new URLSearchParams(url.search);

//new value of "id" is set to '101'
search_params.set("id",id);
search_params.set("topic",topic);

//change the search property of the main url
url.search = search_params.toString();

//the new url string
let new_url = url.toString();

//output
console.log(new_url);