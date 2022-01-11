import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'

const Container = styled.div``
const Wrapper = styled.div``
const BoxContainer = styled.div`
	display: flex;
	flex-wrap:wrap;
	justify-content: space-between;
	align-items: center;
`
const Box = styled.div`
	flex:1;
	min-width:150px;    /* for wrap */
	margin:1rem 1rem;
	padding: 1rem;
	border-radius:10px;
	cursor:pointer;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-direction: column;

`
const BoxTop = styled.div``
const BoxTopTitle = styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const BoxCenter = styled.div`
	display: flex;
	align-items: center;
	margin:15px 0;
	`
const BoxAmount = styled.div`
	font-size: 2.0rem;
	font-weight: 700;
	margin-right: 10px;
	white-space: nowrap;
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

	// get income revenue profit 
	const [parameter, setParameter] = useState([])
	useEffect(() => {
		const getIncome = async () => {
			try {
				const res = await userRequest.get("/order/income/stats/get");
				setParameter(res.data); 
			} catch (error) {
				console.log(error.message);
			}
		}
		getIncome();
	}, [])

	//geting cost stats
	const [cost, setCost] = useState();
	useEffect(() => {
		const getCost = async () => {
			try {
				const res = await userRequest.get("/order/cost/stats/get");
				setCost(res.data);
				console.log(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		getCost();
	}, [])

	return (
		<Container>
			<Wrapper>
				<BoxContainer>
					<Box>
						<BoxTop>
							<BoxTopTitle>Sales</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs {parameter[0]?.totalAmount}</BoxAmount>
						</BoxCenter>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Cost</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount> Rs {cost}</BoxAmount>
						</BoxCenter>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Profit</BoxTopTitle>
							<BoxIncrement>
								<BoxAmount> Rs {parameter[0]?.totalAmount - cost}</BoxAmount>
								%{Math.floor(  ((parameter[0]?.totalAmount - cost)/cost) *100 )}{" "}
								{((parameter[0]?.totalAmount - cost)/cost) *100 < 0 ? (
									<ArrowDownward style={{color:"red"}} />
								) : (
									<ArrowUpward style={{color:"green"}} />
								)}  
							</BoxIncrement>
						</BoxTop>
						<BoxCenter>
						</BoxCenter>
					</Box>
					<Box>
						<BoxTop>
							<BoxTopTitle>Orders</BoxTopTitle>
						</BoxTop>
						<BoxCenter>
							<BoxAmount>{parameter[0]?.totalOrder}</BoxAmount>
						</BoxCenter>
					</Box>
				</BoxContainer>
			</Wrapper>
		</Container>
	)
}

export default FeturedInfo
