const mongoose = require('mongoose');

const OrderSchema=new mongoose.Schema({
	userId:{type:String},
	product:[
		{
			productId:{type:String},
			quantity:{type:Number, default:1},
		}
	],
	amount:{ type:Number ,required:true },
	address:{type:Object, required:true },
	status:{type:String , default:"pending" , enum:["pending", "delivered", "cancelled" ]}
})

module.exports=mongoose.model("Order",OrderSchema);