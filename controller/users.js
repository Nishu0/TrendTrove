const bcrypt = require('bcrypt')
const user = require('../models/user')

module.exports={
    create: async(req,res,next)=>{
      await user.create({name:req.body.name, email:req.body.email, password:req.body.password, phoneNumber: req.body.phoneNumber})
      .then((err,result)=>{
        if(err){
            next(err)
        }
        else{
            res.status(200)
            res.json({status:'success', message:'User added successfully!', data:null})
        }
    })
       
    },

    authenticate:function (req,res,next){
        user.findOne({email:req.body.email, password:req.body.password})
        .then((err,userInfo)=>{
            if(err){
                next(err)
            }
            else{
                if(bcrypt.compareSync(req.body.password, userInfo.password)){
                    res.json({status:"error",message:"User Found!", data:{user: userInfo}})
                }
                else{
                    res.json({status:"error", message:"Invalid Email/Password", data:null})
                }
            }
        })
    }
}