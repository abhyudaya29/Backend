const express=require('express')
const {request}=require('http')
const bodyParser = require("body-parser")
  
// New app using express module
// const app = express();

const app=express()
app.use(bodyParser.urlencoded({
    extended:true
}));
app.get('/avg',(request,response)=>{
    response.sendFile(__dirname+"/index_avg.html")
})
app.post('/avg',(request,response)=>{
    let numa=Number(request.body.num1)
    let numb=Number(request.body.num2)
    let  avg=numa+numb/2;
    response.send("Average: "+avg)
})
app.listen(2000,()=>{
    console.log("listnig ate port 2000")
})