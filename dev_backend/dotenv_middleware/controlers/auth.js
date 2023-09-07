const {user}=require('../models/user');
// const { use } = require('../routes');
const signupcontroller=async(req,res)=>{

    console.log("controller called")
    const email=req.body.email
    const password=req.body.pass;
    if(!email|| !password){
        res.status(403).send('Email and Password required')
        return;

    }
    const id=Math.floor(Math.random()*1000);
    user.push({
        id,
        email,
        password
    })
    res.status(200).json({
        id
    })

}
const logincontroller=async(req,res)=>{
    console.log("login controller called")
    // res.send('logincontroller')
    const email=req.body.email
    const password=req.body.pass;
    if(!email|| !password){
        res.status(403).send('Email and Password required')
        return

    }
    const users=user.find(item=>item.email===email)
    if(!users){
        res.status(403).send('user not found')
        return;
    }
    if(users.pass!==password){
        res.status(403).send('wrong credentials')
        return;
    }
    res.status(200).json(users)
    

}
module.exports={
    signupcontroller,
    logincontroller
}