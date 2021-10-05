import React from 'react'
import Announcement from "../../Component/Announcement/Announcement"
import Navbar from "../../Component/Navbar/Navbar"
import Slider from "../../Component/Slider/Slider"
import Categories from "../../Component/Categories/Categories"
import Products from "../../Component/Products/Products"
import NewsLetter from "../../Component/NewsLetter/NewsLetter"
import {userData} from "../../DummyData"
import Footer from "../../Component/Footer/Footer"

const Home = () => {
	return (
		<div>
			<Navbar />
			<Announcement/>	
			<Slider/>
			<Categories/>
			<Products title="Popular Products"/>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Home
