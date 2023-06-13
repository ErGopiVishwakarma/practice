// const express=require('express')
// const cookieParser=require('cookie-parser')

// const app=express()
// app.use(cookieParser())

// app.get('/',(req,res)=>{
//     const name=req.cookies.name || ""
//     const location=req.cookies.city || ""
//     res.send(`welcome ${name} from ${location} and role is ${req.cookies.role} and language is ${req.cookies.language}`)
// })

// app.get('/user',(req,res)=>{
//     res.cookie('name','gopi vishwakarma')
//     res.cookie('city',"varanasi")
//     res.send('this is user page')
// })

// app.get('/admin',(req,res)=>{
//     res.cookie('role','admin',{httpOnly:true,})
//     res.cookie('language','Hindi',{maxAge:5000})
//     res.send('admin page')
// })










// app.listen(2000,()=>{
//     console.log('server is running at port 2000')
// })

const getUserMedia = require('getusermedia')
let video = document.getElementById('hi')
getUserMedia({
    video:true,
    audio:true
},function(err,stream){
    if(err){
        console.log(err.message)
    }

    // const video = document.createElement('video')
    document.body.appendChild(video)
    video.srcObject = stream
    video.play()
})