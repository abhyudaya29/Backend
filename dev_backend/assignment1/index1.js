const express=require('express')
// const { copyFileSync } = require('fs')
const {request}=require('http')



const app=express()
app.get('/user',(request,response)=>{
    response.send("<h1>HI</h1>")
})

app.get('/random',(request,response)=>{
    // let randomnumer=Math.random(1,6)*100
    let numberrandom= Math.floor((Math.random()*7))
    response.send(`<h1> <var> numberrandom is :${numberrandom}</var></h1>`)
})
app.listen(5000,()=>{
    console.log("Server listning at port 5000")
})