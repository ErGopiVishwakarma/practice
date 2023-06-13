const {WebSocketServer} = require('ws')


const wss=new WebSocketServer({port:9000})

 
wss.on('connection',(socket)=>{
    console.log('got socket connection')
    socket.send('hellow from websocket')

    socket.onmessage=(event)=>console.log(event.data)

    socket.onclose=()=>{console.log('client disconnected')}
})