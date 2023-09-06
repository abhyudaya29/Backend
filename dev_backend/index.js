const express=require('express');
const { request } = require('http');

const app=express()
// console.log(__dirname)
app.get('/user',(request,response)=>{
    console.log("Request received for user");   
    response.send({
        name:"Anhyudaya",
        age:"22",
    });
});
app.get("/",(request,response)=>{
    // response.send("<h1>Abhyudaya chutiya</h1>")
    response.sendFile(__dirname+'/index.html')
})
app.listen(5000,()=>{
    console.log(`Server is running on port 5000`);
})
app.get("/baby",(request,response)=>{
    response.json({
        name:"dev",
        age:34,
    })
})