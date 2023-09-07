const signupcontroller=async(req,res)=>{

    console.log("controller called")
    res.send('signupcontroller')

}
const logincontroller=async(req,res)=>{
    console.log("login controller called")
    res.send('logincontroller')

}
module.exports={
    signupcontroller,
    logincontroller
}