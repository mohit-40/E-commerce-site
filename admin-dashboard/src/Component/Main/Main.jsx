import { FormatIndentIncrease } from '@mui/icons-material'
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
	/* flex:1; */
	border:2px solid black;
	border-radius:10px;
	padding: 1rem;
`
const BoxTop = styled.div``
const BoxTopTitle = styled.div``
const BoxAmount = styled.div``
const BoxIncrement = styled.div``
const BoxCenter = styled.div``
const BoxBottom = styled.div``


const Main = () => {
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
							<BoxIncrement><FormatIndentIncrease />+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Revenue</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs 25,035</BoxAmount>
							<BoxIncrement><FormatIndentIncrease />+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Revenue</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs 25,035</BoxAmount>
							<BoxIncrement><FormatIndentIncrease />+5</BoxIncrement>
						</BoxCenter>
						<BoxBottom>Compared to last month</BoxBottom>
					</Box>
				</BoxContainer>
			</Wrapper>
		</Container>
	)
}

export default Main
