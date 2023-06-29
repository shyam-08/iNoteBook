const mongoose = require('mongoose');
// conection string for mango db 
const mongoURI ="mongodb://localhost:27017/inotebook&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


mongodb://localhost:27017/

   var  connectToMongo =  () => {
        mongoose.connect(mongoURI,()=>{
    
           console.log("Connected to mongo Successful")
       
   })
}
   
module.exports =connectToMongo ;