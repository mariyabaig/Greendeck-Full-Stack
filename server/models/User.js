const mongoose = require("mongoose")
const {Schema} = mongoose

const useSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
    
})
const User = mongoose.model('user',useSchema)
User.createIndexes();
module.exports = User;