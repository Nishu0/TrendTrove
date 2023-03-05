const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
})

userSchema.pre('save', function(next){
    this.password=bcrypt.hashSync(this.password, 8);
    next();
});

module.exports = mongoose.model('user', userSchema);