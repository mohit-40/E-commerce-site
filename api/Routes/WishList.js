const router = require('express').Router();
const WishList = require('../Model/WishList');
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } =require('./verifyToken');

router.post("/:id",verifyTokenAndAuthorization , async(req,res)=>{
	try {
		const listItem = await WishList.findOne({productId:req.body.productId})
		if(listItem){
			console.log(listItem)
			res.status(200).json(listItem);
		}
		else{
			const newWishList =await new WishList(req.body);
			const wishList = await newWishList.save();
			res.status(200).json(wishList);
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
})

router.get("/:id" ,verifyTokenAndAuthorization , async(req,res)=>{
	try {
		const wishList = await WishList.find({userId: req.params.id});
		res.status(200).json(wishList);
	} catch (error) {
		res.status(400).json(error.message);
	}
})

router.delete("/:id/:wid" ,  verifyTokenAndAuthorization , async(req,res)=>{
	try {
		await WishList.findByIdAndDelete(req.params.wid);
		res.status(200).json("wishList item deleted")
	} catch (error) {
		res.status(400).json(error.message);
	}
})

module.exports=router;