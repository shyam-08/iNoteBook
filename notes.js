const express = require("express");
const router  = express.Router();
const Notes =require('../models/Notes');
const fetchUser =require('../middleware/fetchUser')
const { query, validationResult } = require('express-validator');
  
// Routes:1 Fetchallnotes of  logged in user details using GET "/api/auth/Fetchallnotes" login required 

router.post('./Fetchallnotes',fetchUser,async(req,res)=>{
    try {
        
    const notes=await Notes.find({user:req.user.id});
    res.json({})
    }catch(error){
        console.error(error.message);
        res.status(500).send('internal server Error')
    }
})
// route:2 add new note using POST "/api/auth/Fetchallnotes"
router.post('./addnotes',fetchUser,async(req,res)=>{
    body ('Title','Enter a valid title').islength({min:3}),
    body('Description',"description must be 5 character").islength({min:5})
 try{
    const{title,description,tag}=req.body 
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const note=new note({
            title,description,tag,user:req.user.id,
        })
        const saveNote=await note.save()
    res.json({saveNote})
 }catch(error){
    console.error(error.message);
    res.status(500).send('internal server Error')
}

})
module.export=router;