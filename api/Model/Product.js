const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,"product name required"],
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
		type:Array
	},
	size:{
		type:Array
	},
	inStock:{
		type:Boolean,
		default :true
	},
	price:{
		type:Number,
		required:true
	},
	cost:{
		type:Number
	},
	rating:{
		type:String
	},

},{ timestamps:true })

module.exports=mongoose.model("Product",ProductSchema);