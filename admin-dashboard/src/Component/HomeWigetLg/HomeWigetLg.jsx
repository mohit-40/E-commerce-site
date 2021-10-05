import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
	flex:2;
	margin: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Title=styled.div`
	font-size: 1.5rem;
	font-weight:700;
`
const MyTable=styled.table`
	width:100%;
	margin:10px 0;
`
const TrHeading=styled.tr`
	text-align: left;
`
const Th=styled.th``
const Tr=styled.tr`
	color: gray;
`
const TdCustomer=styled.div`
	display: flex;
	align-items: center;
`
const ImageContainer=styled.div`
	width:40px;
	height:40px;
	margin-right: 10px;
	`
const Image=styled.img`
	height:100%;
	width:100%;
	border-radius: 50%;
	object-fit: cover;
	`
const Name=styled.td`
	color: black;
	font-size: 1.1rem;
	font-weight:600;
`
const TdDate=styled.td``
const TdAmount=styled.td``
const TdStatus=styled.td``
const Status=styled.button`
	color: ${(props)=> props.status==="accepted"? "darkGreen": props.status==="decline" ? "darkRed": "#666600" };
	background: ${(props)=> props.status==="accepted"? "lightGreen": props.status==="decline" ? "Red": "#ffff80" };
	border-radius: 10px;
	padding:5px 5px;
	border: none;
	cursor: pointer;
`

const HomeWigetLg = () => {
	return (
		<Container>
			<Title>Lastest Transaction</Title>
			<MyTable>
				<TrHeading>
					<Th>Customer</Th>
					<Th>Date</Th>
					<Th>Amount</Th>
					<Th>Status</Th>
				</TrHeading>
				<Tr>
					<TdCustomer>
						<ImageContainer><Image src="https://source.unsplash.com/random"></Image></ImageContainer>
						<Name>lorem item</Name>
					</TdCustomer>
					<TdDate>2 jun 2021</TdDate>
					<TdAmount>Rs 250</TdAmount>
					<TdStatus><Status status="accepted">accepted</Status></TdStatus>
				</Tr>
				<Tr>
					<TdCustomer>
						<ImageContainer><Image src="https://source.unsplash.com/random"></Image></ImageContainer>
						<Name>lorem item</Name>
					</TdCustomer>
					<TdDate>2 jun 2021</TdDate>
					<TdAmount>Rs 250</TdAmount>
					<TdStatus><Status status="decline">decline</Status></TdStatus>
				</Tr>
				<Tr>
					<TdCustomer>
						<ImageContainer><Image src="https://source.unsplash.com/random"></Image></ImageContainer>
						<Name>lorem item</Name>
					</TdCustomer>
					<TdDate>2 jun 2021</TdDate>
					<TdAmount>Rs 250</TdAmount>
					<TdStatus><Status status="pending">Pending</Status></TdStatus>
				</Tr>
			</MyTable>
		</Container>
	)
}

export default HomeWigetLg
