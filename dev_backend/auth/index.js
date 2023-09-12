const express=require('express')
const request=require('http')



const app=express()
app.post('/',(req,res)=>{
    res.render("login")
    console.log(req.cookies)

})
app.post('/login',(req,res)=>{
    res.cookie("tokem","i am in")
    res.redirect('/')
    
    console.log("server listned")
})


app.listen(5000,()=>{
    console.log("server is served at 5000")
})