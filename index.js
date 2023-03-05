const express = require('express');
const bodyParser = require('body-parser')
const users = require('./routes/users')
const connectDB = require('./database/connection')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/users', users)

app.get("/",(req,res)=>{
    res.json({message:"Working"})
})

connectDB()

app.listen(3000,(req,res)=>{
    console.log('Server Listening at Port: 3000')
})