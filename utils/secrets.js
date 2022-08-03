require("dotenv/config")

const { DB_HOST,DB_USER,DB_NAME,DB_PASS} = process.env

const requiredCredentials =["DB_HOST","DB_USER","DB_NAME","DB_PASS"]

for(const credential of requiredCredentials){
    if(credential === undefined){
        console.log(`The credentail ${credential} is missing`)
        process.exit(1)
    }
}
module.exports ={
    DB_HOST,
    DB_USER,
    DB_NAME,
    DB_PASS
}