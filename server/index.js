import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
},()=>{
    console.log("DB connected")
})

app.get("/",(req,res)=>{
res.send("API")
})

//userSchema
const userSchema = mongoose.Schema({
    name: String,
    email : String,
    password : String
})

const User = new mongoose.model("User",userSchema)

//route login
app.post("/login",(req,res)=>{
    res.send("API")
    })

//route register
app.register("/register",(req,res)=>{
    res.send("API")
    })
    

app.listen(9002,()=>{
    console.log("Port started at 9002")
})