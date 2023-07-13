const express = require('express')
const socket = require('socket.io')
const app=express()
const chatRoute=require('./Routes/chatRoute')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',chatRoute)
app.listen(3000,()=>{
    console.log("Welcome to Chat app")
})
