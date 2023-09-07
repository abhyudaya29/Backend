const router=require('express').Router()
const postRouter=require('./post')
const authRouter=require('./auth')
const {logger}=require('../middleware/logger')
router.use('/post',postRouter)
router.use('/auth',logger,authRouter)

module.exports=router