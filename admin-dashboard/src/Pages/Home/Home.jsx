import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import FeturedInfo from '../../Component/FeaturedInfo/FeturedInfo'
import Table from '../../Component/Table/Table'
import styled from 'styled-components'

const Container=styled.div`
	.FeturedInfo{ display: flex; }
`

const Home = () => {
	return (
		<Container>
			<Topbar />
			<div className="FeturedInfo">
				<Sidebar className="home-sidebar"/>
				<FeturedInfo className="other"/>
			</div>
		</Container>
	)
}

export default Home
