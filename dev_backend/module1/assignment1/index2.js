const express=require('express')

const {request}=require('http')
const bodyParser = require("body-parser")
const app=express()

app.use(bodyParser.urlencoded({
    extended:true
}));
app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index3.html');
})
app.get('/sum',(request,response)=>{
    response.sendFile(__dirname+"/index2.html")
})
app.post('/sum',(request,response)=>{
    // response.send('<h1>HII</h1>')
    let n1=Number(request.body.num1);
    let n2=Number(request.body.num2);
    // let add=request.body.
    let add=n1+n2;
    response.send("Addition"+add)
})
app.listen(3000,()=>{
    console.log("Server at 3000")
})