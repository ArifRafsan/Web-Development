let url = new URL("http://demourl.com/path?id=100&topic=main");

let query_search = url.search;

let search_params = new URLSearchParams(query_search);

search_params.append('id','101');
search_params.append('id','102');

url.search = search_params.toString();

let new_url = url.toString();

console.log(new_url);


//deleting parameter
search_params.delete('id')


