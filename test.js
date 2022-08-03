const nodemailer = require("nodemailer");


const sendMail = async ()=>{
let transporter = nodemailer.createTransport({
    host:"mail.ceponit.com.ng",
    port:465,
    secure:true,
  
    auth:{
        user:"admin@ceponit.com.ng",
        pass:"Jquest@5493"
    }
})


let info = await transporter.sendMail({
    from:{
        name:"Ceponit Consults",
        address:"admin@ceponit.com.ng"
    },
    to:"oluwatobiisaiah0409@gmail.com",
    subject:"Testing Node mailer",
    text:"hello world",
    attachments:[{
        filename:"physics725.png",
        path:"./assets/physics725.png",
        cid:"uniquenodemaikerf"
    }],
    html:"<b>The testing of express-mysql is going fine</b></br><img src='cid:uniquenodemaikerf'/>",
    headers:"Oluwatobi Coding hackathon"
})
console.log("message sent",info.messageId)
console.log(info.response)

}

sendMail().catch(console.error)