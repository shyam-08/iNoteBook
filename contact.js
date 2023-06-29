const express= require("express");
const router =express.router;
const fetchUser=require('../middleware/fetchUser')
// const Notes=require('..models/Notes')

// route:1 fetch all contacts using post api/auth/FetchAllContact. no login reqiured
router.post("/fetchAllcontact",fetchUser,async(req,res)=>{
const contact = contact.find({name:req.name.id});
res.json(contact);
})

// Route 2:Add a new contact using post "api/auth/addcontact" .login required
router.post ('/addcontact',fetchname,[
    body('name','Enter a valid name').islength({min:3}),
    body('number','number must be atleast 10 digits').islength ({min:10}),

],async(req,res)=>{
// if there are errors,return bad request and the errors
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
res.json(contacts)

})
// Route:3 Edit an exiting contact using post "/api/auth/editcontact".login reqired
router.put("/editcontact/:id",fetchuser,async(req,res)=>{
    const {name,email,number }=req.body;
    // create  a newcontact Object
    const newcontact={};
    if(id){newcontact.id=title};
    if(email){newcontact.email=email};
    if(number){newcontact.number=number};
    
    // find the contact to be edit and update it 
    const contact=contact.findById(req.params.id);
    if(!contact){return res.status(404).send("Not found")}
    
    if(contact.name.toString()!==req.user.id){
        return res.status(401).send("Not Allowed")
    }
})