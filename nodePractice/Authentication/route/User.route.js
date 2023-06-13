
const express=require('express')
const {UserModel}=require('../model/User.model')
const jwt=require('jsonwebtoken')
const bcryptjs=require('bcryptjs')
const fs=require('fs')
const {authenticated}=require('../middlewareFolder/authenticated')
const {authorizedUser}=require('../middlewareFolder/authorizedUser')

const userRouter=express.Router()

userRouter.get('/',(req,res)=>{
    res.send({msg:'welcome report company....'})
})

userRouter.post('/signup',(req,res)=>{
    const {name,email,password,role}=req.body
    try {
        bcryptjs.hash(password,5,async(err,hash)=>{
            const user=new UserModel({name,email,password:hash,role})
            await user.save()
            res.send({msg:'user has been successfully signup....'})
        })
    } catch (error) {
        console.log('something went wrong....')
        res.send({msg:'something went wrong...',error:error.message})
    }
    
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try {
        const user =await UserModel.find({email})
        if(user.length>0){
            bcryptjs.compare(password,user[0].password,async(err,result)=>{
                if(result){
                    const token=jwt.sign({userId:user[0]._id,role:user[0].role},'tech')
                    const refreshToken=jwt.sign({userId:user[0]._id},'refToken')
                    res.send({msg:'user has been successfully login...',token,refreshToken})
                }else{
                    res.send({msg:'something went wrong...'})
                }
            })
        }else{
            res.send({msg:'login failed...'})
        }
    } catch (error) {
        res.send({msg:'somthing went wrong...',error:error.message})
    }
})

userRouter.get('/report',authenticated,(req,res)=>{
    res.send({msg:'yes you can do it'})
})

// refresh token route for creating new normal token 

userRouter.get('/getnewtoken',authenticated,(req,res)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        res.send('please login first .....')
    }else{
        jwt.verify(token,"refToken",(err,decoded)=>{
            if(err){
                res.send('you need to login first.....')
            }else{
                const userId=decoded.userId
                console.log(userId)
                const token=jwt.sign({userId:userId},'tech')
                res.send({msg:'token update..',token})

            }
        })
    }
})

// RBAC Roll Based Access Control 
userRouter.get('/editproduct',authenticated,authorizedUser(["seller","admin"]),async(req,res)=>{  
   res.send({msg:'use can edit the product'})  
})

userRouter.get('/reviewproduct',authenticated,authorizedUser(['customer',"admin"]),(req,res)=>{
    res.send({msg:'you can see the product'})
})

userRouter.get('/edituser',authenticated,authorizedUser(['admin']),(req,res)=>{
    res.send({msg:'you can edit the users'})
})




userRouter.get('/logout',(req,res)=>{
    const token=req.headers.authorization?.split(" ")[1]
    const blackList=JSON.parse(fs.readFileSync('./blackList.json','utf-8'))
    blackList.push(token)
    fs.writeFileSync('./blackList.json',JSON.stringify(blackList))
    res.send({msg:'logging out successfully....'})
})


module.exports={
    userRouter
}