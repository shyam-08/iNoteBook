const express = require("express");
const User =require('../models/User');
const { query, validationResult } = require('express-validator');
const router  = express.Router();
const mongoose = require('mongoose');
const jwt= require("jsonwebtoken");
const JWT_SECRET="shyamisaking ";
const fetchUser =require('../middleware/fetchUser')

//Route:1 create a user using Post "/api/auth/createuser"  Doesn't require auth  no login reqired
router.post('/Createuser',[
body ('name','Enter a valid Name').islength({min:3}),
body('email','Enter a valid email').isEmail(),
body('password',"password must be 5 character").islength({min:5})
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }try{
    // check whether the user with this email exists already
    let user =await User.findOne({email:req.body.email});
    if(!user){
return res.status(400).json({error:"Sorry a user with this email already exists"});
    }
const salt =await bcrypt.genSalt(10);
    const secPass =await bcrypt.hash(req.body.password,salt)
     user = await User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
    })
    const data ={
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    console.log(jwtData);
    res.json(authtoken)
}catch(error){
    console.error(error.message);
    res.status(500).send('internal server Error')
}

})
   
    //Route:2 Authenticate a user using Post "/api/auth/login"    no login reqired
    
    router.post('/login',[
        body('email','Enter a valid email').isEmail(),
        body('password','Password cannot be blank').exist(),

        ],async(req,res)=>{
            const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const{email,password}=req.body
    try {
        let user=await User.findone(email);
        if(!user){
            res.send().status["404"].json({error:"Please enter correct credential"});
        }
        let passwordcompare=await bcrypt.compare(password,userpassword);
        if(!passwordcompare){
            res.send().status["404"].json({error:"enter correct password"});
        } 

        const data={
            user:{
                id:user.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json(authtoken);

    }catch (error) {
        console.error(error.message)
        res.status["404"].send("internal server error");
    }
})



// try(user)=>{res.json(user)};
// .catch(err)=>{console.log(err)}
// res.json({error: 'please enter a unique value for email',message:err.message})
// ]


// Routes:3 get logged in user details using Post "/api/auth/createuser" login required 
router.post('/getuser',fetchUser,async(req,res)=>{

try {
    UserId= req.user.id ;
    const user = await User.findById(userId).select("-password")
    res.send(user);
}catch(error){
    console.error(error.message);  
    res.status(500).send("some Error occured");
}
})
module.exports=router