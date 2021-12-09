const router=require('express').Router();
const User = require('../Model/User');
const bcrypt = require('bcrypt');
const saltRounds =10;
const jwt=require("jsonwebtoken")



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
		//check prev jwt if not then down
		const user =await User.findOne({email:req.body.email});
		if(!user ) {res.status(404).json('user not found')}
		else{
			const validPassword=await  bcrypt.compare(req.body.password, user.password )
			if(!validPassword) { res.status(404).json('incorrect password');}
			else {

				//gernate jwt 
				const accessToken=jwt.sign({id:user._id , isAdmin:user.isAdmin }, process.env.JWT_SECRET ,{expiresIn:"3d"})
				const refreshToken=jwt.sign({id:user._id , isAdmin:user.isAdmin } , process.env.JWT_SECRET)
				// rt.push_back(refreshToken);
				
				const  {password, ...others } = user._doc;   
				res.status(200).json({...others, accessToken});
			}
		}
	}
	catch(err){
		res.status(404).json(err.message);
	}
})

module.exports=router;