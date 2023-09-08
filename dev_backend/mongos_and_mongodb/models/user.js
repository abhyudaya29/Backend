const mongoose=require('mongoose');
const userschema=mongoose.Schema({
    name:String,
    password:String,
    // age:Number,
    // hobbies:[String]

});

const Addmi=mongoose.model('user',userschema)
module.exports=(Addmi)