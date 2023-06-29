const mangoose = require("mangoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
    type:String,
    required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now
        
    }
  });
  const User=mongoose.model('user',UserSchema);
User.createIndexes();
module.exports=mangoose.model('user','UserSchema')