const express= require('express');

const app=express();

app.get('/',(req,res)=>{
    return res.send('Ram rAM bhai raraye ne');
});

app.get('/about',(req,res)=>{
    return res.send(`Hello ${req.query.name}`
    )
});


app.post('/')
app.listen(5000,(err)=>{
    console.log("Server started at prot 5000");
})
 