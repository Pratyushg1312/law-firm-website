const mongoose =require("mongoose");

const contactschema= new mongoose.Schema({
    id:String,
    info:{ 
        fname:String,
        lname:String,
        email:String,
        phone:String,
        message:String,
       
        }
   
})

const Contact =new mongoose.model("contact",contactschema );
module.exports = {Contact};