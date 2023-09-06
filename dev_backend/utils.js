function multiply(a,b){
    return a*b;
}
const log={
    warning:(info)=>{
        console.log("warning",info)
    },
    error:(info)=>{
        console.error('Error', info)
    }
}
const hello=()=>{
    console.log("Hello bamby")
}
module.exports={multiply,log,hello};

