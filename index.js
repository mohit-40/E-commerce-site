//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv=require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require('mongoose');
const helmet=require('helmet'); 
const cors = require("cors") 

//!including route file
const authRoute=require('./Routes/Auth');
const userRoute=require('./Routes/User');
const cartRoute=require('./Routes/Cart');
const orderRoute=require('./Routes/Order');
const productRoute=require('./Routes/Product');
const stripeRoute=require('./Routes/Stripe');
const wishListRoute=require('./Routes/WishList');
const emailRoute=require('./Routes/Email');
const port=process.env.PORT||8800;

//!/* -------------------------------- mongoose -------------------------------- */
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err.message));

//!/* ------------------------------- middleware ------------------------------- */
app.use(express.json())
app.use(helmet());
app.use(cors());
//! /* ----------------------------- setting static ----------------------------- */
if (process.env.NODE_ENV === "production") {
	console.log("in production")
	const path = require("path")
	app.use(express.static(path.join(__dirname, "/clients/build")));
	
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '/clients/build', 'index.html'));
	});
}
if (process.env.NODE_ENV !== "production") {
	const morgan = require("morgan");
	app.use(morgan("common"));
}
//!/* ---------------------------------- Route --------------------------------- */
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/product",productRoute);
app.use("/api/checkout",stripeRoute);
app.use("/api/wishList",wishListRoute);
app.use("/api/email",emailRoute);
//!/* ---------------------------- listening to port --------------------------- */
app.listen(port , ()=>{
	console.log("server running on port "+process.env.PORT||8800 );
});
