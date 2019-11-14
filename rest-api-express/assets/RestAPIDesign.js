// Identify Object Model (apni ki niye kaj korte chacchen)

/* USER 
        -name
        -id
        -email
        -password
        -birthday
        -phone number

    POST 
        -title
        -body
        -[comments]
        -likes
        -post created time
        -updated time
*/



// Create Model URI

    /*
        https://example.com/api/users GET
        https://example.com/api/users POST

        https://example.com/api/users/:id GET 
        https://example.com/api/users/:id PUT/PATCH
        https://example.com/api/users/:id DELETE

        https://example.com/api/post GET
        https://example.com/api/post POST


        https://example.com/api/posts/:id  GET
        https://example.com/api/posts/:id  PUT/PATCH
        https://example.com/api/posts/:id  DELETE
    */

// Determine Representation
        // multiple data
// Single data representation

    /*
        {
            name: "rafsan",
            id : "000287",
            email: "arifullah@gmail.com",
            password: "123arif",
            phone:"01829320829",
            birthday: "22 September"
        }
    
    */

// JSON view
        /*
            users: [
                {
                    "name": "rafsan",
                    "id" : "000287",
                    "email": "arifullah@gmail.com",
                    "password": "123arif",
                    "phone":"01829320829",
                    "birthday": "22 September"
                }
            ]
        
        
        */

// user[0].name
// user[2].email