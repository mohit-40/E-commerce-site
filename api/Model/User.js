const mongoose =require('mongoose');

const UserSchema = new mongoose.Schema({
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
	password:{
		type:String,
		required:[true,"Password required"]
	},
	isAdmin:{
		type: Boolean,
		default:false
	},
} , {timestamps:true} );

module.exports= mongoose.model("User",UserSchema);
