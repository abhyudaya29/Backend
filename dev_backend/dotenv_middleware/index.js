const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const express= require('express')
const mainrouter=require('./routes/index')
// mainrouter

const app=express()
app.use(express.json())
function middleware(req,res,next){
    console.log(req.url,new Date().toTimeString())
    next()
    // if(req.body && req.body.name==="Abhyudaya"){
    //     next()
    // }
    // else{
    //     res.send('Not allowed')
    // }

}
app.use(middleware)

app.use('/api',mainrouter)
app.get('/',(request,response)=>{
    response.send({
        data:"ok",
    })
})
const PORT=4000;
// console.log(process.env.SECRET_KEY)
app.listen(PORT,()=>{
    console.log("server is running",PORT)

})

