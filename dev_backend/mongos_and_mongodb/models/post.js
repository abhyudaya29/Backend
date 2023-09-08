const mongoose=require('mongoose')

const postschema=mongoose.Schema({
    title:String,
    description:String,
    likecount:Number,
    user:mongoose.Types.ObjectId
})

module.exports=mongoose.model('post',postschema)