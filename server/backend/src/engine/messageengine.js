const{Contact}=require("../models/contactschema");
const express =require("express");
const mongoose =require("mongoose");

const feedmsg= async(req,res)=>{
    
    console.log(req.body);
        // let data=await User.findOne({id:req.body.id});
        // console.log(data);
    //    if(data === null)
    //    {

           const contact=new Contact({...req.body});
           contact.save();
           
           res.send("message sent");
        
        
     
    //    }
};
module.exports=feedmsg;