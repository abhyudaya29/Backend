const router=require('express').Router()
// const router=router()
router.get('/',(req,res)=>{
    res.json({
        id:'123',
        title:'hello',
        imgurl:'lastgr',
    })
})
router.post('/',(req,res)=>{
    
})
module.exports=router;