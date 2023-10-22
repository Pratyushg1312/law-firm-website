const mongoose =require("mongoose");

const contactschema= new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
})

const User =new mongoose.model("User",contactschema );
module.exports = {User};