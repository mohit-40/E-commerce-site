const router = require('express').Router();
const Cart = require("../Model/Cart");
const {verifyToken, verifyTokenAndAuthorization , verifyTokenAndAdmin} =require('./verifyToken');



// create cart 
router.post("/",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		const newCart =await new Cart(req.body);
		const cart = await newCart.save();
		res.status(200).json(cart);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
// update cart (handle add,delete item  as array modified karke update ke liye api req)
router.put("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		const updatedCart = await Cart.findOneAndUpdate({userId:req.params.userId},{$set:req.body}, {new:true});
		res.status(200).json(updatedCart);
	}
	catch(err){
		res.status(500).json(err.message);
	}
})
//delete cart
router.delete("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		Cart.findOneAndDelete({userId:req.params.userId});
		res.status(200).json("user cart has been deleted");
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//get user cart
router.get("/:userId",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		const userCart=await Cart.findOne({userId:req.params.userId});
		res.status(200).json(userCart);
	}
	catch(err){
		
		res.status(500).json(err.message);
	}
})

//get all cart 
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
	try {
		const allCart= await Cart.find()
		res.status(200).json(allCart);
	} catch (error) {
		res.status(400).json(erro.message);
	}
})


module.exports=router;


