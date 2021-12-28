const router = require('express').Router();
const User = require('../Model/User');

const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } =require('./verifyToken');
const bcrypt = require('bcrypt');
const saltRounds =10;

//get the user 
router.get("/find/:id",verifyTokenAndAdmin, async(req,res)=>{
	try{
		const user = await User.findById(req.params.id);
		const {password,...other}=user._doc;
		res.status(200).json(other);
	}catch(err){
		res.status(400).json(err.message);
	}
});
//get all user
router.get("/allusers",verifyTokenAndAdmin, async(req,res)=>{
	try{
		const users=await User.find();
		res.status(200).json(users);
	}
	catch(err){ 
		res.status(400).json(err.message)
	}
})
//update the user
router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
	try{
		if(req.body.password){
			const salt = await bcrypt.genSalt(saltRounds);
			const hashPassword = await bcrypt.hash(req.body.password, salt);
			req.body.password=hashPassword;
		}
		const updatedUser=await User.findByIdAndUpdate(req.params.id,{ $set: req.body},{new:true});
		res.status(200).json(updatedUser);
	}
	catch(err){
		res.status(404).json(err.message);
	}
})

//delete the user
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("user deleted");
	}
	catch(err){
		res.status(400).json("err.message");
	}
})

//get users stat

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
	try {
	  const data = await User.aggregate([
		{ $match: { createdAt: { $gte: lastYear } } },
		{
		  $project: {
			month: { $month: "$createdAt" },
		  },
		},
		{
		  $group: {
			_id: "$month",
			total: { $sum: 1 },
		  },
		},
	  ]);
	  res.status(200).json(data)
	} catch (err) {
	  res.status(500).json(err);
	}
  });

module.exports=router;