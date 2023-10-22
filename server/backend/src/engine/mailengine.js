const nodemailer = require("nodemailer");


// let testaccount =await nodemailer.createTestAccount();
const sendmail=async(req,res)=>{
  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure:true,
    auth: {
      user: 'naomie30@ethereal.email',
      pass: 'mvqc18J2uqyfcdbUEP'
    }
  });
  res.send("you made it");
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <naomie30@ethereal.email>', // sender address
    to: "pratyushg095@gmail.com",// list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log(info.messageId);
}

  module.exports = sendmail;