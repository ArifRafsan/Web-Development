// middleware functions are functions which have req,res,next function

/* 
    Middleware function can perform
        - execute any code
        - changes the request and the response code
        - end the request-response cycle
        - call the next middleware in the stack

        req and res er majhkhane data guluke modify korar jonno thake middleware
*/

/*
    Middleware function syntax

    app.use((req,res,next)=>{
        console.log(res)
        next() // you have to always call res() or next() otherwise its not working
    })
*/

/*
    Third Party Middleware
        Morgan : It is a logger

*/