const jwt=require('jsonwebtoken')
const fs=require('fs')


const authenticated=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        res.send('please login first....')
    }else{
        const blackList=JSON.parse(fs.readFileSync('./blackList.json','utf-8'))
        if(blackList.includes(token)){
            res.send({msg:'plase login....'})
        }else{
            jwt.verify(token,'tech',(err,decoded)=>{
                if(err){
                    res.send({msg:'Uhhh please login........'})
                }else{
                    next()
                }
            })
        }       
    }
}

module.exports={
    authenticated
}