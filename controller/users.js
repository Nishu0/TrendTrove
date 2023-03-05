const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports={
    create: async(req,res,next)=>{
        try{
            const {name,email,password,phoneNumber}=req.body;
            if(!(email&&password&&name)){
                res.status(400).send("All field is require");
            }
            const oldUser=await User.findOne({email});
            if(oldUser){
                return res.status(401).send("User already exists");
            }
            if(password.length < 8){
                return res.json({
                status: 'error',
                error: 'Password too small. Should be atleast 8 characters'
                })
            }
            const user= await User.create({
                name:name, 
                email:email, 
                password:password, 
                phoneNumber:phoneNumber
            })
            res.redirect('/login');
        }
        catch(err){
            next(err);
        }
    },

    authenticate: async(req,res,next)=>{
        try{
            const{email,password}=req.body;
            if(!(email&&password)){
                return res.status(400).send("Email and password both required")
            }
            const user=await User.findOne({email});
            //console.log(user);
            const validPassword=await bcrypt.compare(password,user.password);
            if(validPassword){
                req.session.user_id=user._id;
                console.log(req.session.user_id);
                //res.json({status:"error",message:"User Found!", data:{user: userInfo}})
                res.redirect('/');
            }
        }
        catch(err){
            // res.json({status:"error", message:"Invalid Email/Password", data:null})
            console.log(err);
        }
    }
}