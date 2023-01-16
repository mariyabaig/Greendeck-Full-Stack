const mongoose = require("mongoose")

const DB = "mongodb+srv://mariyabaig:ketumie@cluster0.70i1s3u.mongodb.net/users?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));