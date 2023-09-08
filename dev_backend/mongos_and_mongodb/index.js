
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dubey:chai@cluster0.ddvr09m.mongodb.net/?retryWrites=true&w=majority";
const Addmi=require('./models/user');
const { default: mongoose } = require('mongoose');
const user = require('./models/user');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

mongoose.connect(uri,{
    name:"Chai"
}).then(()=>{
    console.log("hogaya connect")
}).catch((e)=>{
    console.log("error hai",e)
})


// const entry=mongoose.model("Entry",User)

async function createuser(newuser){
    const Entry=new Addmi(newuser)
    const data=await Entry.save()
    console.log("Saved");


}
async function finduser(){
    const users=await Addmi.find()
    console.log(users)
}

finduser()

