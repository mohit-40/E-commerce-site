//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv=require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require('mongoose');
const morgan = require("morgan");
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

// this is remove due to content security policy error 
// const helmet=require('helmet'); 
// app.use(helmet());
// app.use(
// 	helmet.contentSecurityPolicy({
// 	  useDefaults: true,
// 	  directives: {
// 		"img-src": ["'self'", "https: data:"]
// 	  }
// 	})
//   )
//in html use meta but better to write in directive in helmet here 
{/* <meta 
  http-equiv="Content-Security-Policy" 
  content=
    " 
      default-src 'none';
      script-src 'self' 'unsafe-inline' http://www.google-analytics.com/analytics https://checkout.stripe.com/checkout.js;
      font-src 'self' https://fonts.gstatic.com https://use.fontawesome.com;
      connect-src 'self' https://shophify.herokuapp.com';
      img-src * 'self' data: https:;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      media-src 'self';
      frame-src 'self' ;
    "
  >  */}
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
