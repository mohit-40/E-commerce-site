const mongoose= require('mongoose');

const EmailSchema=new mongoose.Schema({
	email:{type:String ,required: true}
},{timestamps:true})

module.exports=mongoose.model("email",EmailSchema);