const mongoose=require('mongoose')
const Schema=mongoose.Schema
const dataSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true, 
        default:false
    }


})  
   // mongoose.model("name",schema) is used to create collection with name : name
module.exports=mongoose.model("datas",dataSchema)