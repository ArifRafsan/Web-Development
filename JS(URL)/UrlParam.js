const myUrl = new URL('https://www.youtube.com/')

myUrl.hostname = 'google.com'

//myUrl.search ="?name=arif rafsan&age=26"

myUrl.searchParams.set('name','rafsan')
myUrl.searchParams.set('age',26)

console.log(myUrl);
console.log(myUrl.toString());


//current url
// const url = new URL(window.location.href)

// console.log(url.searchParams.get("name"));


// const url = new URL("https://stackoverflow.com/questions/50421683/react-js-how-do-i-pass-variables-parameters-to-the-api-url")

// fetch(url)
//     .then(response => console.log(response))
//     .catch(error=>console.log(error))
