const { route } = require('./post')
const {logincontroller}=require('../controlers/auth')
const {signupcontroller}=require('../controlers/auth')
const router=require('express').Router()
const {logger}=require('../middleware/logger')
router.post('/login',logincontroller)

router.post('/signup',logger,signupcontroller)

module.exports=router