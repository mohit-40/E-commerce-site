//jshint esversion:6 
//!/* ---------------------------- include pakage --------------------------- */
const dotenv=require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require('mongoose');
const helmet=require('helmet');
const morgan=require('morgan');


//!including route file
const authRoute=require('./Routes/Auth');
const userRoute=require('./Routes/User');
const port=process.env.PORT||8800;

//!/* -------------------------------- mongoose -------------------------------- */
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err.message));

//!/* ------------------------------- middleware ------------------------------- */
app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

//!/* ---------------------------------- Route --------------------------------- */
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
//!/* ---------------------------- listening to port --------------------------- */
app.listen(port , ()=>{
	console.log("server running on port "+port );
});
