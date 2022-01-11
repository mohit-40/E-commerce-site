import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod';

const Container = styled.div``
const Wrapper = styled.div``
const Heading = styled.h1` 
	text-align:center;
	color:red;
`
const Table = styled.table`
	font-family: arial, sans-serif;
	border-collapse: collapse;
	width: 100%;
	
`
const Tr = styled.tr`
	&:nth-child(even) {
  	background-color: #dddddd;
	}
`
const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const ButtonContainer = styled.div`
	display:flex;
	flex-wrap:wrap; 
	justify-content:center;
`

const Button = styled.button`
	border-radius:10px;
	padding:10px;
	color:white;
	border:none;
	font-size:18px; 
	margin: 10px 5px;
	cursor:pointer;
	max-width:200px;
	&:hover{
		background-color:"red";
	}
`
function OrderDetail() {
	const params = useParams();
	const orderId = params.orderId;
	const [order, setOrder] = useState({})
	const [user, setUser] = useState({})
	const currentUserId = useSelector(state => state.user.currentUserId);
	useEffect(() => {
		const fetchOrder = async () => {
			try {
				const res = await userRequest.get("/order/" + currentUserId + "/" + orderId);
				setOrder(res.data);
				const userRes = await userRequest.get("/user/find/" + res.data.userId);
				setUser(userRes.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchOrder();
	}, [orderId, currentUserId])

	const handleStatus=async(status)=>{
		try {
			const res = await userRequest.put("/order/"+currentUserId+"/"+orderId , { ...order , status:status })
			setOrder(res.data);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Container>
			<Wrapper>
				<Heading>ORDER DETAIL</Heading>
				<Table>
					<tbody> 
					<Tr>
						<Th>Feild</Th>
						<Th>Detail</Th>
					</Tr>
					<Tr>
						<Td>Order Id</Td>
						<Td>{order._id}</Td>
					</Tr>
					<Tr>
						<Td>Account User Name</Td>
						<Td>{user.name}</Td>
					</Tr>
					<Tr>
						<Td>Status</Td>
						<Td><b>{order.status}</b></Td>
					</Tr>
					<Tr>
						<Td>Amount</Td>
						<Td>{order.amount}</Td>
					</Tr>
					<Tr>
						<Td>Address</Td>
						<Td>
							{order.address?.address?.line1} <br />
							{order.address?.address?.line2} <br />
							{order.address?.address?.city}<br />
							{order.address?.address?.country}<br />
							{order.address?.address?.postal_code}<br />
							{order.address?.address?.state}
						</Td>
					</Tr>
					<Tr>
						<Td>Order UserName</Td>
						<Td>{order.address?.name}</Td>
					</Tr>
					<Tr>
						<Td>Mobile</Td>
						<Td>{order.address?.phone}</Td>
					</Tr>
					<Tr>
						<Td>Email</Td>
						<Td>{order.address?.email}</Td>
					</Tr>

					<Tr>
						<Td>Products</Td>
						<Td>	
							productId ={">"} color , size, quantity<br/><br/>
							{
								order?.product?.map((p) => (
									<div key={p.productId}> {p.productId}  ={">"} {p.color} , {p.size} , {p.quantity} </div>
								))
							}
						</Td>
					</Tr>
					</tbody>
				</Table>
				<ButtonContainer>
					<Button style={{ backgroundColor: "red" }} onClick={()=>handleStatus("cancelled")}>Cancel</Button>
					<Button style={{ backgroundColor: "green" }} onClick={()=>handleStatus("delivered")}>Delivered</Button>
				</ButtonContainer>

			</Wrapper>
		</Container>
	)
}

export default OrderDetail
