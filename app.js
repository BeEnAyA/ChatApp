const express = require('express')
const app=express()
const chatRoute=require('./Routes/chatRoute')
const port=3000
const { Server } = require("socket.io");

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',chatRoute)

const server = app.listen(port, () => {
    console.log(" Hello, chat box");
});

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("Connected")
    // console.log("Connected");
    // socket.on("chatMessage", (data) => {
    //     console.log(data);
    //     io.emit("getMessages", data);
    // });
});
