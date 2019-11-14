const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const contactRoute = require('./api/routes/Contacts')


const app = express()
app.use(morgan('dev'))   // logger dependency 
app.use(cors())

app.use(bodyParser.urlencoded({extended: true})) // see body parameter from request
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

//middleware function
// app.use((req,res,next) => {
//     console.log("I am a middleware function");
//     next()
// })

app.use("/api/contacts", contactRoute)

// default route "/"
app.get('/', (req,res) => {
    res.send('<div><h1>Hello Aline</h1><p>Hello Jupitar</p></div>')
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})  // port is argument

// nodemon - change anything in server is directly updated

const contacts = [
    { name:"Rafsan", email:"rafsan@gmail.com"},
    { name:"roman", email:"roman@gmail.com"},
    { name:"rana", email:"rana@gmail.com"}
]