import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
import {useSelector} from "react-redux"
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'

const Container=styled.div`
	flex:2;
	margin: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Wrapper=styled.div`
	min-height:100vh
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

const Orders = () => {
	const currentUserId = useSelector(state => state.user.currentUserId)
	const [order ,setOrder] =useState([]);
	useEffect(()=>{
		const fetchOrder = async()=>{
			try {
				const res = await userRequest.get("/order/"+currentUserId);
				setOrder(res.data);			
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchOrder();
	},[currentUserId])
	return (
		<Container>
			<Navbar />
			<Announcement/>	
			<Wrapper>

			<Title>Lastest Transaction</Title>
			<MyTable>
				<TrHeading>
					<Th>Customer</Th>
					<Th>Date</Th>
					<Th>Amount</Th>
					<Th>Status</Th>
				</TrHeading>
				{	order.length===0 ? <h2>No order to Show</h2> :
					order.map(o=>(
						<Tr key={o._id}>
							<TdCustomer>
								<ImageContainer><Image src="https://source.unsplash.com/random"></Image></ImageContainer>
								<Name>{o.userId}</Name>
							</TdCustomer>
							<TdDate>{o.createdAt}</TdDate>
							<TdAmount>Rs {o.amount}</TdAmount>
							<TdStatus><Status status="accepted">{o.status}</Status></TdStatus>
						</Tr>
					))
				}
			</MyTable>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default Orders
