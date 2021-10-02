import React from 'react'
import Announcement from "../../Component/Announcement/Announcement"
import Navbar from "../../Component/Navbar/Navbar"
import Slider from "../../Component/Slider/Slider"
import Products from "../../Component/Products/Products"

const Home = () => {
	return (
		<div>
			<Announcement/>
			<Navbar />
			<Slider/>
			<Products />
		</div>
	)
}

export default Home
