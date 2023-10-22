const{User}=require("../models/schema.js");
const express =require("express");
const mongoose =require("mongoose");
const oAuth = require("./authrizationengine.js");
oAuth

const authen= async(req,res,next)=>{
    console.log(req.body);
        let data=await User.findOne({email:req.body.email,password:req.body.password});
        console.log(data);
       if(data === null)
       {
           res.send("Invalid email or password");
           oAuth({id:"*"})
       }
        else{
            
            res.send({id:data._id,
                name:data.fname+" "+data.lname,
            });
            oAuth({id:data._id,
                name:data.fname+" "+data.lname,
            })
       }
       
};
module.exports=authen;