import { ArrowDownward, ArrowUpward, DownhillSkiing, FormatIndentIncrease } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	flex:4;
`
const Wrapper = styled.div``
const BoxContainer = styled.div`
	display: flex;
	flex-wrap:wrap;
	justify-content: space-between;
	align-items: center;
`
const Box = styled.div`
	flex:1;
	min-width:250px;    /* for wrap */
	min-height: 150px;  /* for jc:space-around*/ 
	margin:1rem 1rem;
	padding: 1rem;
	border-radius:10px;
	cursor:pointer;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-direction: column;
	justify-content: space-around;

`
const BoxTop = styled.div``
const BoxTopTitle = styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const BoxCenter = styled.div`
	display: flex;
	align-items: center;
	`
const BoxAmount = styled.div`
	font-size: 2.5rem;
	font-weight: 700;
	margin-right: 10px;
`
const BoxIncrement = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
`
const BoxBottom = styled.div`
	font-size: 1.2rem;
`


const FeturedInfo = () => {
	return (
		<Container>
			<Wrapper>
				<BoxContainer>
					<Box>
						<BoxTop>
							<BoxTopTitle>Revenue</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs 25,035</BoxAmount>
							<BoxIncrement><ArrowUpward style={{color:"green"  ,fontSize:"2rem"}}/>+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Revenue</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs 25,035</BoxAmount>
							<BoxIncrement><ArrowDownward style={{color:"red" ,fontSize:"2rem"}}/>+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Revenue</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs 25,035</BoxAmount>
							<BoxIncrement><ArrowDownward style={{color:"red" ,fontSize:"2rem"}}/>+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
				</BoxContainer>
			</Wrapper>
		</Container>
	)
}

export default FeturedInfo
