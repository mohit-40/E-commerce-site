import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
import TransactionRow from '../../Component/TransactionRow/TransactionRow'
import { useSelector } from 'react-redux'
const Container = styled.div`
	flex:2;
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


const CancelRequest = () => {
	const currentUserId = useSelector(state => state.user.currentUserId);
	const [order, setOrder] = useState([]);
	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const res = await userRequest.get("/order?status=cancelRequest");
				setOrder(res.data);
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchOrder();
	}, [])
 
	//handle deleteOrder
	const handleDeleteOrder = async (oid) => {
		try {
			await userRequest.delete("/order/" + currentUserId + "/" + oid);
			setOrder(order.filter(o => o._id != oid))
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<Container>
			<Title>Cancel Order Request</Title>
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
							<TransactionRow order={o} key={o._id} handleDeleteOrder={handleDeleteOrder}/>
						))
					}
				</TrBody>
			</MyTable>
		</Container>
	)
}

export default CancelRequest;
