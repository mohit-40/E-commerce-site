const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken');
const Order = require("../Model/Order")

router.post("/payment/:id",verifyTokenAndAuthorization,(req,res)=>{
	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount:req.body.amount*100,
			currency: "INR"
		},
		async(err, stripeRes)=>{
			try {
				if(err){ return res.status(500).json(err.message) }
				else{ 
					console.log(stripeRes)
					const newOrder=await new Order({
						userId:req.params.id,
						product: req.body.order,
						amount: req.body.amount,
						address: stripeRes.billing_details
					});
					const order=await newOrder.save();
					res.status(200).json(order);		
				}
			} 
			catch (error) { res.status(404).json("payment done but order not placed")}
		}
	)
})

module.exports=router