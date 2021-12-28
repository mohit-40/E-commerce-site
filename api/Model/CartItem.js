const mongoose= require('mongoose');

const CartItemSchema=new mongoose.Schema({
	userId:{ type:String, required:true }, 
	productId:{ type: String },
	quantity:{ type:Number , default:1},
	color: {type:String },
	size:{type:String}  
},{timestamps:true})

module.exports=mongoose.model("CartItem",CartItemSchema);