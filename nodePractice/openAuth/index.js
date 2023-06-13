const { default: axios } = require('axios')
const express=require('express')
const passport=require('./googleAuth')
var session = require('express-session')

const app=express()
app.use(express.json())
// app.use(express.session())
app.use(session({
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true
  }))

app.get('/',(req,res)=>{
    res.send({msg:'you are welcome to in my backend journey'})
})

// const CLIENT_ID="1c9ac0f3d3a07f4455ed"
// const CLIENT_SECRET="5e997092a2881974a2b4640fd8625246ec4932bf"
//authenticatin with github
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + "/auth.html")
})
 




























app.get('/auth/github',async(req,res)=>{
    const code = req.query
   const accessToken=await axios({
        method:'post',
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json"
        },
        url:'https://github.com/login/oauth/access_token',
        data:{
            client_id:CLIENT_ID,
            client_secret:CLIENT_SECRET,
            code:code.code
        }
    }).then(res=>res.data)
    const userDetails=await axios({
        method:'get', 
        headers:{
            Authorization:`Bearer ${accessToken.access_token}`
        },
        url:'https://api.github.com/user'
    }).then(res=>res.data)    
    console.log(userDetails)
    res.send('login is pregress')
})




app.listen(8090,()=>{
    console.log('server is running at port 8090....')
})