require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
const authRoute = require("./routes/user.auth")
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "API working fine"
        }
    });
});

app.use('/api/v1/auth', authRoute);

const PORT = process.env.PORT || 4040
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: err.message
    });
    next();
});