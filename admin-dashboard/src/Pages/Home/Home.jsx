import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import FeturedInfo from '../../Component/FeaturedInfo/FeturedInfo'
import Table from '../../Component/Table/Table'
import Chart from '../../Component/Chart/Chart'
import styled from 'styled-components'

const Container = styled.div`
	.mainSection{ 
		display: flex;
		.other{ flex:4; }
	}
`

const Home = () => {
	return (
		<Container>
			<Topbar />
			<div className="mainSection">
				<Sidebar className="home-sidebar" />
				<div className="other">
					<FeturedInfo className="other" />
					{/* <Chart /> */}
				</div>
			</div>
		</Container>
	)
}

export default Home
