let url = new URL('http://example.com?id=100&topic=main')

var search_params = new URLSearchParams(url.search);

if(search_params.has('id')){
    let id = search_params.get('id')

    console.log(id);
    
}

//all

let all = search_params.getAll('topic');
console.log(all);
