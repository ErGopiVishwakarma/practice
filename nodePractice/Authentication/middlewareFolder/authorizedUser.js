const jwt=require('jsonwebtoken')
const fs=require('fs')


const authorizedUser=(role)=>(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    const decoded=jwt.decode(token)
    const userrole=decoded.role
    if(role.includes(userrole)){
        next()
    }else{
        res.send({msg:'uhhh something went wrong....'})
    }
}








module.exports={
    authorizedUser
}