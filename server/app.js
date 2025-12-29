const express = require('express');
const http = require('http');
const cors =require('cors');
const socketio = require('socket.io');

const app = express();

const server = http.createServer(app);
const io = socketio(server,{
    cors :{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log('New client connected');

    socket.on("chat",(data) =>{
        io.emit("chat",data)
    })

    socket.on("disconnect",()=>{
        console.log('Client disconnected');
    })
})

const PORT = process.env.PORT || 3001;

server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})