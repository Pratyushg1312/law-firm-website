const{User}=require("../models/schema.js");
const express =require("express");
const mongoose =require("mongoose");

const embed= async(req,res)=>{
        let data=await User.findOne({email:req.body.email});
        console.log(data);
       if(data === null)
       {

           const user=new User({...req.body});
           user.save();
           
           res.send("Registered");
        }
        else{
            
            res.send("Email already existed");
     
       }
};
module.exports=embed;