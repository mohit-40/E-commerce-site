const router = require('express').Router();
const Email = require("../Model/Email")

router.post("/newsletter",async(req,res)=>{
	try {
		await new Email(req.body).save();;
		res.status(200).json("Subcribed to Newsletter successfully")
	} catch (error) {
		res.status(404).json(error.message);
	}
})
module.exports = router