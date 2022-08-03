const mysql = require("mysql")

const {DB_HOST,DB_NAME,DB_USER,DB_PASS} = require("../utils/secrets.js")

const connection = mysql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    database:DB_NAME,
    password:DB_PASS
})

connection.connect((err)=>{
    if(err) console.log(err.message)
    else console.log("Database connected successfullly")
})
module.exports = connection