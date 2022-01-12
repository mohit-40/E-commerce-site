const router=require('express').Router();
const Product=require('../Model/Product')
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken');

//create product
router.post("/",verifyTokenAndAdmin,async(req,res)=>{
	try {
		const newProduct=await new Product(req.body);
		const product =await newProduct.save();
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//delete product
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json("product has been deleted")
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//update product
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{$set:req.body} , {new:true});
		res.status(200).json(updatedProduct);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//get product
router.get("/:id", async(req,res)=>{
	try {
		const product=await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (error) {
		res.status(500).json(error.message);	
	}
})


//get all product 
router.get("/", async(req,res)=>{
	console.info("het i finallly got here it mean something is good here and we can do this");
	const queryNew=req.query.new;
	const queryCategory=req.query.category;
	try {
		if(queryNew){
			allProduct= await Product.find().sort({createdAt:-1}).limit(5)
		}
		else if(queryCategory){
			allProduct=await Product.find({ category:{$in: [queryCategory]}})
		}
		else {
			allProduct=await Product.find()
		}
		res.status(200).json(allProduct);
	} catch (error) {
		console.log(error.message)
		res.status(500).json(error.message);
	}
})




module.exports=router;
