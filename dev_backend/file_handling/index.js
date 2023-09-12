const { error, log } = require('console');
const file=require('fs');
// sync call
// file.writeFileSync('./text.txt',"Hey")

// ///Async call
// file.writeFile('./text.txt','yoo bamby',(err)=>{
//     console.log(err);

// })

// const result=file.readFileSync('./text.txt','utf-8');
// console.log(result);

// file.readFile('./text.txt','utf-8',(error,result)=>{
//     if(error){
//         console.log("Error");
//     }
//     else{
//         console.log(result);
//     }

// })

// file.appendFile('./text.txt',`aur be: ${Date.now()}`,(error)=>{
//     if(error){
//         console.log("error");
//     }
//     else{
//         console.log("Updated");
//     }
// })
// Blocking Request example: 
// console.log("1");
// const result=file.readFileSync('text.txt','utf-8');
// console.log(result);
// console.log("2");
// Non blocking request example:
console.log("1");
file.readFile('text.txt','utf-8',(err,result)=>{
    try{
        console.log(result);
    }
    catch{
        console.log(err);
    }
    
});
console.log("2");
console.log("3");