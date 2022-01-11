import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
import TransactionRow from '../../Component/TransactionRow/TransactionRow'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'
const Container = styled.div`	
	flex:2;
	`
const Wrapper = styled.div`
	min-height:85vh;
	margin: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`	
const Title = styled.div`
	font-size: 1.5rem;
	font-weight:700;
`
const MyTable = styled.table`
	width:100%;
	margin:10px 0; 
`
const TrBody = styled.tbody``
const TrHeading = styled.tr`
	text-align: left;
`
const Th = styled.th`` 


const HomeWigetLg = () => {
	const currentUserId = useSelector(state => state.user.currentUserId);
	const [order, setOrder] = useState([]);
	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const res = await userRequest.get("/order/");
				setOrder(res.data);
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchOrder();
	}, []) 
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
			<Title>Lastest Transaction</Title>
			<MyTable>
				<TrBody>
					<TrHeading> 
						<Th>Customer</Th>
						<Th>Date</Th>
						<Th>Amount</Th>
						<Th>Status</Th>
					</TrHeading>
					{
						order.map(o => (
							 <TransactionRow order={o} key={o._id}  />
						))
					}
				</TrBody>
			</MyTable>
			</Wrapper>
			<Footer/>
		</Container>
	)
}

export default HomeWigetLg
