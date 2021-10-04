import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import Main from '../../Component/Main/Main'
import Table from '../../Component/Table/Table'
import styled from 'styled-components'

const Container=styled.div`
	.main{ display: flex; }
`

const Home = () => {
	return (
		<Container>
			<Topbar />
			<div className="main">
				<Sidebar className="home-sidebar"/>
				<Main className="other"/>
			</div>
		</Container>
	)
}

export default Home
