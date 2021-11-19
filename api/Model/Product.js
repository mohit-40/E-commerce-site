const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,"product name required"],
		unique:true
	},
	desc:{
		type:String,
		required:true
	},
	img:{
		type:String,
		required:true
	},
	category:{
		type:Array
	},
	color:{
		type:String
	},
	size:{
		type:String
	},
	price:{
		type:Number,
		required:true
	}

},{ timestamps:true })

module.exports=mongoose.model("Product",ProductSchema);