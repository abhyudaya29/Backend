import express from 'express'
import path from 'path'
const app=express()
app.set("view engine","ejs")
app.get("/",(request,response)=>{
    response.render("index",{name:"abhyudaya"})
})

app.listen(5000,()=>{
    console.log('Server is running')
})