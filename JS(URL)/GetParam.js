let url = new URL("http://example.com?id=100&topic=main")

let query_string = url.search;

let search_params = new URLSearchParams(query_string);

let id = search_params.get('id');

console.log("single parameter : "+id);

//Getting all parameter
for( let i of search_params){
    console.log("All parameter data: "+i[0]+ ' : '+ i[1]);
    
}

