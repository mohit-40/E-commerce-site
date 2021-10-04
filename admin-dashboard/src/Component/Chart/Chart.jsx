import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";
import styled from 'styled-components'
import {userData} from '../../DummyData'

const Container=styled.div``
const ChartTitle=styled.div``

const Chart = () => {
	return (
		<Container>
			<ChartTitle>Users Analytics</ChartTitle>
			<ResponsiveContainer width="100%"  aspect={4 / 1}>
				<LineChart data={userData}>
					<XAxis dataKey="name" stroke="#5550bd"/>
					<YAxis/>
					<Line dataKey="Active User" stroke="#5550bd" type="monotone"/>
					<Tooltip/>
					<CartesianGrid stroke="#e0dfdf" />
				</LineChart>
			</ResponsiveContainer>
		</Container>
	)
}

export default Chart
