const logger=(req,res,next)=>{
    console.log("Auth middle ware")
    next()
}

module.exports={logger}