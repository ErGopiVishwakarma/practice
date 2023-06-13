const http = require('http')
const express = require('express')
const { Server } = require('socket.io')
const { isObject } = require('util')

const app = express()
const httpServer = http.createServer(app)

app.get('/', (req, res) => {
    res.send('this is the home page')
})

app.get('/about', (req, res) => {
    res.send('why are you eager to know about me...')
})

httpServer.listen(5000, () => {
    console.log('server is running at port 5000..')
})

const wss = new Server(httpServer)

let count = 0
let seats = 10
wss.on('connection', (socket) => {
    console.log('connect with socket')
    socket.on('chat message',(msg)=>{
        socket.emit('message',msg)
    })
})