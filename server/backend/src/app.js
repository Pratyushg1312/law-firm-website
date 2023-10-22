
const express =require("express");
const cors =require("cors");
const nodemailer = require("nodemailer");
const mongoose =require("mongoose");
// const path = require("path");
const app =express();
module.exports=app;
app.use(express.json());
// app.use(express.urlencoded())
app.use(cors());
const sendmail=require("./engine/mailengine");
require("./db/conn.js");
const embed=require("./engine/signupengine.js");
const authen=require("./engine/loginengine.js");
const authe=require("./engine/authrizationengine.js");
const{User}=require("./models/schema.js");
const oAuth = require("./engine/authrizationengine.js");
const feedmsg = require("./engine/messageengine");
// const {transporter}=require("./engine/mailengine.js");
require('./engine/authrizationengine');
const port=process.env.PORT || 10000;


// console.log(path.join(__dirname,"../public"));


app.post("/signup",embed);
app.post("/login",authen);
app.post("/contact",feedmsg);





app.listen(port,()=>{
    console.log(`server is running by your power ${port}`);
})