import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis, } from "recharts";
import styled from 'styled-components'

const Container=styled.div`
	margin:1rem;
	padding: 1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const ChartTitle=styled.div`
	font-size: 1.2rem;
	font-weight: 700;
	margin:0 0 15px 1rem;
`

const Chart = ({title,xDataKey,lineDataKey,data,height}) => {
	


	return (
		<Container>
			<ChartTitle>{title}</ChartTitle>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data} height="100%">
					<XAxis dataKey={xDataKey} stroke="#5550bd"/>
					<Line dataKey={lineDataKey} stroke="#5550bd" type="monotone"/>
					<Tooltip/>
					<CartesianGrid stroke="#e0dfdf" />
				</LineChart>
			</ResponsiveContainer>
		</Container>
	)
}

export default Chart
