import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Table from '../../Component/Table/Table'
import styled from 'styled-components'

const Container=styled.div`
	.main{
		display: flex;
		.home-sidebar{}
		.other{ flex:4; background: #000; }
	}
`

const Home = () => {
	return (
		<Container>
			<Topbar />
			<div className="main">
				<Sidebar className="home-sidebar"/>
				<div className="other">other</div>
			</div>
		</Container>
	)
}

export default Home
