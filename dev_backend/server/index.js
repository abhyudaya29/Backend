const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{

    // console.log(req);
    const log=`${Date.now()}: New request received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        
        res.end("Hello from server");
    });
    console.log("req accessed");
});
server.listen(5000,((req,res)=>{
    console.log(`Listening on port 5000`);
}))