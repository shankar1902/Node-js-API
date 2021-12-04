const mongoose=require('mongoose');

const developerSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Role:{
        type:String,
        required:true,
        trim:true
    },
})
module.exports = mongoose.model("Developer",developerSchema)