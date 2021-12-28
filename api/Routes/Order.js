const router=require('express').Router();
const Order=require('../Model/Order');
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin}=require('./verifyToken');

//create order
router.post("/",verifyTokenAndAuthorization,async(req,res)=>{
	try {
		const newOrder=await new Order(req.body);
		const order=await newOrder.save();
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//update order add and delete item
router.put("/:id/:oid",verifyTokenAndAuthorization,async(req,res)=>{
	try { 
		const updatedOrder= await Order.findByIdAndUpdate(req.params.oid,{ $set:req.body }, {new:true});
		console.log(updatedOrder);
		res.status(200).json(updatedOrder);	
	} catch (error) {
		res.status(400).json(error.message);
	}
})

//delete whole order
router.delete("/:id/:oid",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		await Order.findByIdAndDelete(req.params.oid);
		res.status(200).json("orders has been deleted");
	}
	catch(error){
		res.status(500).json(error.message);
	}
})

//get user orders
router.get("/:id",verifyTokenAndAuthorization,async(req,res)=>{
	try{
		const userOrder=await Order.find({userId:req.params.id});
		res.status(200).json(userOrder);
	}
	catch(error){
		res.status(500).json(error.message);
	}
})
//get all order
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
	try{
		const allOrder=await Order.find();
		res.status(200).json(allOrder);
	}
	catch(error){
		res.status(400).json(error.message);
	}
})

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
	try {
	  const income = await Order.aggregate([
		{ $match: { createdAt: { $gte: previousMonth } } },
		{
		  $project: {
			month: { $month: "$createdAt" },
			sales: "$amount",
		  },
		},
		{
		  $group: {
			_id: "$month",
			total: { $sum: "$sales" },
		  },
		},
	  ]);
	  res.status(200).json(income);
	} catch (err) {
	  res.status(500).json(err);
	}
  });
  
module.exports=router