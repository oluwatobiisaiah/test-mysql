const User = require("../models/user.model")
const {hash: hashPassword,compare:comparePassword} = require("../utils/password")

exports.signup = (req,res)=>{
    const { firstname, lastname, email, password } = req.body;
    const hashed = hashPassword(password.trim())
    const user = new User(firstname.trim(),lastname.trim(),email.trim(),hashed)


 User.createuser(user,(err,data)=>{
 if(err){
    res.status(500).json({
        status: "error",
        message: err.message
    });
 }else{
    res.status(201).json({
        data
    })
 }
 })   


}

exports.signin = (req,res)=>{
    const {email,password} = req.body

    User.findUserByEmail(email,(err,data)=>{
        if(err){
            if(err.kind =="not_found"){
                res.status(404).send({
                    status:"error",
                    message:`User with email ${email} does not exist`
                })
                return
            }
            res.status(500).send({
                status:"error",
                message:err.message
            })
            return
        }
        if(data){
             if(comparePassword(password,data.password)){
                res.status(200).send({
                    data:{
                        firstname:data.first_name,
                        lastname:data.last_name,
                        email:data.email
                    }
                })
                return;
             }
             res.status(401).send({
                status:"error",
                message:"Invalid password"
             })
            //  return
        }

    })
}