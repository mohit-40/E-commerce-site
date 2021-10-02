import React from 'react'
import Announcement from "../../Component/Announcement/Announcement"
import Navbar from "../../Component/Navbar/Navbar"
import Slider from "../../Component/Slider/Slider"
import Categories from "../../Component/Categories/Categories"
import Products from "../../Component/Products/Products"
import NewsLetter from "../../Component/NewsLetter/NewsLetter"
import Footer from "../../Component/Footer/Footer"

const Home = () => {
	return (
		<div>
			<Announcement/>
			<Navbar />
			<Slider/>
			<Categories/>
			<Products />
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Home
