import React, { useEffect, useMemo, useState } from 'react'
import FeturedInfo from '../../Component/FeaturedInfo/FeturedInfo'
import Chart from '../../Component/Chart/Chart'
import styled from 'styled-components' 
import HomeWigetSm from '../../Component/HomeWigetSm/HomeWigetSm'
import HomeWigetLg from '../../Component/HomeWigetLg/HomeWigetLg'
import { userRequest } from '../../requestMethod'

const Container = styled.div``
const HomeWigetContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Home = () => {
	//user stats for graph 
	const MONTHS = useMemo(	() => [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec",], [] );
	const [userStats, setUserStats] = useState([]);
	useEffect(() => {
		const getStats = async () => {
		  try {
			const res = await userRequest.get("/user/stats");
			res.data.map((item) =>
			  setUserStats((prev) => [ ...prev, { name: MONTHS[item._id - 1],month:item._id-1,"Active User": item.total } ])
			);
			userStats.sort((a,b) => a.month-b.month);
		  } catch {}
		}
		getStats();
	  }, [MONTHS ]);




	return (
		<Container>
			<FeturedInfo />
			<Chart title="Users Analytics" data={userStats}  xDataKey="name" lineDataKey="Active User" height="300"/>
			<HomeWigetContainer>
				<HomeWigetSm />
				<HomeWigetLg />
			</HomeWigetContainer>
		</Container>
	)
}

export default Home
