const router=require('express').Router()
router.post('/login',(req,res)=>{
    res.send("This is for login")

})

module.exports=router