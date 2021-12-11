const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken');

router.post("/payment/:Userid",verifyTokenAndAuthorization,(req,res)=>{
	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount:req.body.amount,
			currency: "inr"
		},
		(err, stripeRes)=>{
			if(err){ res.status(500).json(err) }
			else{ res.status(200).json(stripeRes) }
		}
	)
})

module.exports=router