const mongoose =require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/contactinfo").then(()=>{
    console.log(`connection stablished`);
   
    
}).catch((e)=>{
    console.log(`pycshic link failed`);
    console.log(e);
});

