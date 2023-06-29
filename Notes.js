const mangoose = require("mangoose");

const NotesSchema = new Schema({
  user:{
    type:mangoose.Schema.Type.ObjectId,
  },
    title:{
    type:String,
    required:true
    },
    description:{
        type:String,
        required:true
        
    },
    tag:{
        type:String,
      default:"general"
    },
    Date:{
        type:Date,
        default:Date.now
        
    }
  });

module.exports=mangoose.model('Notes','NotesSchema')