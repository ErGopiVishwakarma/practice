const express=require('express')
const {connection}=require('./config/db')
const bcryptjs=require('bcryptjs')
const { UserModel } = require('./model/User.model')
const jwt=require('jsonwebtoken')
const {authenticated}=require('./middlewareFolder/authenticated')
const {userRouter}=require('./route/User.route')

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({msg:'you are welcome to home page...'})
})

app.use('/user',userRouter)



app.get('/report',authenticated,(req,res)=>{
    //this page will be authenticated
    res.send({msg:'all reports of user'})
})

app.listen(9090,async()=>{
    try {
        await connection
        console.log("connected to db...")
    } catch (error) {
        console.log('connection has been failed')
        console.log(error)
    }
    console.log('server is running at port 9090....')
})