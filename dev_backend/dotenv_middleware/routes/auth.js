const { route } = require('./post')
const {logincontroller}=require('../controlers/auth')
const {signupcontroller}=require('../controlers/auth')
const router=require('express').Router()
router.post('/login',logincontroller)

router.post('/signup',signupcontroller)

module.exports=router