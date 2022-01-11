const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
	img:{
		type:String
	},
	name:{
		type:String
	},
	lastName:{
		type:String
	},
	username:{
		type:String,
		unique:true,
		required:[true,"username required"]
	},
	email:{
		type:String,
		unique:true,
		required:[true,"email required"]
	},
	mobile:{
		type:Number,
	},
	from:{
		type:String,
	},
	password:{
		type:String,
		required:[true,"Password required"]
	},
	isAdmin:{
		type: Boolean,
		default:false
	},
	refreshTokenArray:{
		type:Array,
	}
} , {timestamps:true} );

module.exports= mongoose.model("User",UserSchema);
