//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv=require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require('mongoose');
const morgan = require("morgan");
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
app.use(cors());

// app.use(helmet());
// app.use(
// 	helmet.contentSecurityPolicy({
// 	  useDefaults: true,
// 	  directives: {
// 		"img-src": ["'self'", "https: data:"]
// 	  }
// 	})
//   )
//!/* ---------------------------------- Route --------------------------------- */
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/product",productRoute);
app.use("/api/checkout",stripeRoute);
app.use("/api/wishList",wishListRoute);
app.use("/api/email",emailRoute);
//! /* ----------------------------- setting static ----------------------------- */
if (process.env.NODE_ENV === "production") {
	console.log("in production")
	const path = require("path")
	app.use(express.static(path.join(__dirname, "/client/build")));
	
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
	});
} 
else{
	app.use(morgan("common"));
}
//!/* ---------------------------- listening to port --------------------------- */
app.listen(port , ()=>{
	console.log("server running on port "+process.env.PORT||8800 );
});
