const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const express= require('express')
const postrouter=require('./routes/post');
const authrouter=require('./routes/auth')

const app=express()
app.use('/post',postrouter)
app.use('/auth',authrouter)
app.get('/',(request,response)=>{
    response.send({
        data:"ok",
    })
})
const PORT=process.env.PORT;
console.log(process.env.SECRET_KEY)
app.listen(PORT,()=>{
    console.log("server is running",PORT)

})

