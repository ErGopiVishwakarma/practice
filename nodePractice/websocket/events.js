const {EventEmitter}= require('events')

const Player = new EventEmitter()

let playerEnergy=100

Player.on('health',()=>{
    console.log(playerEnergy)
})

Player.on('injured',(playername)=>{
    playerEnergy -=50
    console.log(`our ${playername} was injured...uhhhh`)
    Player.emit('health')
})


Player.emit('injured','best player')
