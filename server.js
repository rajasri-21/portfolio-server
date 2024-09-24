require('dotenv').config()
const express=require('express')
const app = express()
const dbConn=require('./config/db')
const Projects= require('./models/projectModel')


const port= process.env.Port|| 7777
app.use('/projects',Projects)
app.get('/',(req,res) => {
    res.status(400).json("Welcome")
})

app.listen(port,()=>{
    console.log('Server running in : ${port}')
})
