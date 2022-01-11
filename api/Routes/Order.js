const router = require('express').Router();
const Order = require('../Model/Order');
const Product = require('../Model/Product');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//create order
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
	try {
		const newOrder = await new Order(req.body);
		const order = await newOrder.save();
		res.status(200).json(order);
	} catch (error) {
		res.status(500).json(error.message);
	}
})
//update order add and delete item
router.put("/:id/:oid", verifyTokenAndAuthorization, async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(req.params.oid, { $set: req.body }, { new: true });
		console.log(updatedOrder);
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(400).json(error.message);
	}
})

//delete whole order
router.delete("/:id/:oid", verifyTokenAndAuthorization, async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.oid);
		res.status(200).json("orders has been deleted");
	}
	catch (error) {
		res.status(500).json(error.message);
	}
})
//get order by orderId 
router.get("/:id/:oid" ,verifyTokenAndAuthorization ,async(req,res)=>{
	try {
		const order = await Order.findById(req.params.oid);
		res.status(200).json(order);
	}catch (error) {
		res.status(500).json(error.message);
	}
} )

//get user orders
router.get("/:id", verifyTokenAndAuthorization, async (req, res) => {
	try {
		const userOrder = await Order.find({ userId: req.params.id });
		res.status(200).json(userOrder);
	}
	catch (error) {
		res.status(500).json(error.message);
	}
})

//get all order
router.get("/", verifyTokenAndAdmin, async (req, res) => {
	try { 
		const param = req.query.status; 
		const allOrder = param ? await Order.find({status:param}) :await Order.find();
		res.status(200).json(allOrder);
	}
	catch (error) {
		res.status(400).json(error.message);
	}
})

// get total income and orders
router.get("/income/stats/get", verifyTokenAndAdmin, async (req, res) => { 
	const productId = req.query.pid;
	var prevMonth = new Date();
	prevMonth.setDate(0);
	prevMonth.setDate(1);
	try {
		const income = await Order.aggregate([
			{
				$match: {
				    status:{$in:[ "delivered", "pending" , "cancelRequest"]} 
				},
			}, 
			{
				$group: {
					_id:null,
					totalAmount: { $sum: "$amount" },
					totalOrder: { $sum: 1 }, 
				}
			}
		]);
		res.status(200).json(income);
	} catch (err) {
		res.status(404).json(err);
	}
});

//get total cost 
router.get("/cost/stats/get", async (req, res) => {
	try { 
		var prevMonth = new Date();
		prevMonth.setDate(0);
		prevMonth.setDate(1);
		const orders = await Order.find({status:{$in:[ "delivered", "pending" , "cancelRequest"]} });
		let cost = 0;
		for (const o of orders) {
			for (const p of o.product) {
				const product = await Product.findById(p.productId);
				cost = cost + product.cost * p.quantity; 
			}
		}
		res.status(200).json(cost);
	} catch (error) {
		res.status(400).json(error.message);
	}
})



module.exports = router