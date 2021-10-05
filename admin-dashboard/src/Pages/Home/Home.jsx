import React from 'react'
import FeturedInfo from '../../Component/FeaturedInfo/FeturedInfo'
import Chart from '../../Component/Chart/Chart'
import styled from 'styled-components'
import { userData } from '../../DummyData'
import HomeWigetSm from '../../Component/HomeWigetSm/HomeWigetSm'
import HomeWigetLg from '../../Component/HomeWigetLg/HomeWigetLg'

const Container = styled.div``
const HomeWigetContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Home = () => {
	return (
		<Container>
			<FeturedInfo />
			<Chart title="Users Analytics" data={userData}  xDataKey="name" lineDataKey="Active User" height="300"/>
			<HomeWigetContainer>
				<HomeWigetSm />
				<HomeWigetLg />
			</HomeWigetContainer>
		</Container>
	)
}

export default Home
