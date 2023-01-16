const express = require('express')
const router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');


//POST request to create a user POST /api/auth/createuser

//if there are errors, return bad request and the errors
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be 8 characters').isLength({min:8}),
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
//check if the user exists already
try {
    let user = await User.findOne({email:req.body.email})
if(user){
    res.status(400).json({errors:"Email already exists", message: errors.message})
}
     user = await User.create({
      name: req.body.name,
      email : req.body.email,
      password: req.body.password,
    })
    
    // .then(user => res.json(user)).catch(err=>{console.log(err) 
    //     res.json({error:"Email already exists",message: err.message})});
    res.json[user]

} catch (error) {
    console.error(error.message)
    res.status(500).send("Some error occured")
}
},
);


module.exports=router