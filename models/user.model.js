const db = require("../config/db.config")
const {createNewUser:createNewUserQuery,FindByEmail:FindUserByEmail} = require("../database/queries")

class User {
    constructor(first_name,last_name,email,password){
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.password = password

    }

    static createuser(newUser,cb){
         db.query(
            createNewUserQuery,
            [
                newUser.first_name,
                newUser.last_name,
                newUser.email,
                newUser.password
            ],(err,res)=>{
                 if(err){
                    console.log(err)
                    cb(err, null);
                    return;
                 }
                     cb(null,{
                        id: res.insertId,
                        firstname: newUser.first_name,
                        lastname: newUser.last_name,
                        email: newUser.email
                     })
                }

         )
    }

    static findUserByEmail(email,cb){
        db.query(FindUserByEmail,email,(err,res)=>{
            if(err){
                console.log(err)
                cb(err,null)
                return
            }
            
            if(res.length){
                cb(null,res[0])
                return;
            }
            cb({kind:"not_found"},null)
        })
    }
}


module.exports = User