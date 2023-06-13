const { default: axios } = require('axios')
const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('this is the home page and welcome to advanced backend journey....')
})

app.get('/users',async(req,res)=>{
     await axios('https://jsonplaceholder.typicode.com/users')
    .then(resss=>res.send(resss.data))

})

app.listen(8080,()=>{
    console.log('server is runnnig at port 8080....')
})