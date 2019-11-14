const express = require('express')
const router = express.Router()

const contacts = []

//GET

router.get("/", (req,res,next)=> {
    res.status(200).json({
        contacts
    })
})

//POST
router.post('/', (req,res,next)=>{

    req.push({
        name: req.body.name,
        email: req.body.email
    })

    res.status(201).json({
        message: "Data Saved",
        // name,   // if key and value same then one name is enough to use
        // email  // email: email 
    })
})

// dynamic route
// router.get('/:id',(req,res,next)=> {
//     const id = req.params.id   //extract what you write
//     res.json({
//         id
//     })
// })

router.get('/:id', (req,res,next)=> {
    res.json({
        message: "Singel Contact id"
    })
})

router.put('/:id', (req,res,next)=> {
    res.json({
        message: "Put some updated data in server."
    })
})

router.delete('/:id', (req,res,next)=> {
    res.json({
        message: "Delete some data from server or delete in consumed application"
    })
})

module.exports = router