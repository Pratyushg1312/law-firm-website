const app=require('../app.js')
function oAuth(param){

  app.get("/auth",async(req,res,)=>{

   if(param === '*') res.send({id:''})
   else
   res.send(param);
  console.log('authorized');
});
}
module.exports=oAuth;