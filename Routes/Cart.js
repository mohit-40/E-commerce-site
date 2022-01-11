const router = require('express').Router();
const CartItem = require("../Model/CartItem");
const Product = require("../Model/Product");
const {verifyToken, verifyTokenAndAuthorization , verifyTokenAndAdmin} =require('./verifyToken');



// create cartItem
router.post("/",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		const newCartItem =await new CartItem(req.body);
		const cartItem = await newCartItem.save();
		res.status(200).json(cartItem);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
// update cartItem
router.put("/:id/:cartItemId",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		const updatedCart = await CartItem.findByIdAndUpdate(req.params.cartItemId ,{$set:req.body}, {new:true});
		res.status(200).json(updatedCart);
	}
	catch(err){
		res.status(500).json(err.message);
	}
})
//delete cart 
router.delete("/:id", verifyTokenAndAuthorization , async(req,res)=>{
	try {
		await CartItem.deleteMany({userId : req.params.id });
		res.status(200).json("user cart deleted");
	} catch (error) {
		res.status(400).json(error.message);		
	}
})
//delete cart item 
router.delete("/:id/:cartItemId",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		await CartItem.findByIdAndDelete(req.params.cartItemId);
		res.status(200).json("cart has been deleted");
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//get user cartItems
router.get("/:id",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		const userCartItems=await CartItem.find({userId:req.params.id});
		res.status(200).json(userCartItems);
	}
	catch(err){
		res.status(500).json(err.message);
	}
})

//get cartItem 
router.get("/cartItem/:id/:cartItemId",verifyTokenAndAuthorization,async(req,res) =>{
	try {
		const cartItem= await CartItem.findById(req.params.cartItemId)
		res.status(200).json(cartItem)
	} catch (error) {
		res.status(400).json(error.message)
	}
})
//get user cartItems price
router.get("/:id/price" , verifyTokenAndAuthorization , async(req,res)=>{
	try {
		const userCartItems=await CartItem.find({userId:req.params.id});
		var price=0;
		for( const cartItem of userCartItems){
			const product = await Product.findById(cartItem.productId);
			price=price + (product.price *cartItem.quantity);
		}
		console.log(price);
		res.status(200).json(price);
	} catch (error) {
		res.status(400).json(error.message);
	}
}) 
//get user cartItems price
router.post("/price"  , async(req,res)=>{
	try {
		var price=0;
		for( const cartItem of req.body.userCartItems){
			const product = await Product.findById(cartItem.productId);
			price=price + (product.price *cartItem.quantity);
		}
		console.log(price);
		res.status(200).json(price);
	} catch (error) {
		res.status(400).json(error.message);
	}
}) 



//get all cartItem
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
	try {
		const allCartItems= await CartItem.find()
		res.status(200).json(allCartItems);
	} catch (error) {
		res.status(400).json(error.message);
	}
})


module.exports=router;
