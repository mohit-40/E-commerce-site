const router=require('express').Router();
const User = require('../Model/User');
const bcrypt = require('bcrypt');
const saltRounds =10;



//register
router.post("/register",async(req,res)=>{
	try{
		const originalPassword=req.body.password;
		const salt = await bcrypt.genSalt(saltRounds);
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const newUser=await new User({
			username:req.body.username,
			email:req.body.email,
			password: hashPassword
		})

		const user = await newUser.save();
		res.status(200).json("user registered");

	}catch(err){
		res.status(404).json(err.message);
	}
})

//login
router.post('/login',async(req,res)=>{
	try{	
		const user =await User.findOne({email:req.body.email});
		!user&& res.status(404).json('user not found')
		const validPassword=await  bcrypt.compare(req.body.password, user.password )
		!validPassword && res.status(404).json('incorrect password');
		const  {password, ...other } = user;  // getting some error solve it later 
		//gernate jwt 
		res.status(200).json(other);
	}
	catch(err){
		res.status(404).json(err.message);
	}
})


module.exports=router;