import React from 'react'
import Announcement from "../../Component/Announcement/Announcement"
import Navbar from "../../Component/Navbar/Navbar"
import Slider from "../../Component/Slider/Slider"

const Home = () => {
	return (
		<div>
			<Announcement/>
			<Navbar />
			<Slider/>
		</div>
	)
}

export default Home
