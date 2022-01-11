import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
const Tr = styled.tr`
	color: gray;
`
const TdCustomer = styled.td`
	display: flex;
	align-items: center;
`
const ImageContainer = styled.div`
	width:40px;
	height:40px;
	margin-right: 10px;
	`
const Image = styled.img`
	height:100%;
	width:100%;
	border-radius: 50%;
	object-fit: cover;
	`
const Name = styled.div`
	color: black;
	font-size: 1.1rem;
	font-weight:600;
`
const TdDate = styled.td``
const TdAmount = styled.td``
const TdStatus = styled.td``
const Status = styled.button`
	color: ${(props) => props.status === "delivered" ? "darkGreen" : props.status === "cancelled" ? "darkRed" : "#666600"};
	background: ${(props) => props.status === "delivered" ? "lightGreen" : props.status === "cancelled" ? "Red" : "#ffff80"};
	border-radius: 10px;
	padding:5px 5px;
	border: none;
	cursor: pointer;
`
const Button = styled.button`
	border-radius:10px;
	padding:5px;
	color:white;
	background: ${props=>props.color};
	border:none;
	font-size:16px; 
	margin: 5px 5px;
	cursor:pointer;
	max-width:200px;
	&:hover{
		background-color:"red";
	}
`

function TransactionRow({ order ,handleDeleteOrder}) {
	const [user, setUser] = useState({}); 
	const currentUserId = useSelector(state => state.user.currentUserId);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await userRequest.get("/user/find/" + order.userId);
				setUser(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchUser();
	}, [order]) 

	//handle status
	const [orderStatus ,setOrderStatus] =useState(order.status);
	const handleStatus=async(status)=>{
		try {
			const res = await userRequest.put("/order/"+currentUserId+"/"+order._id , { ...order , status:status })
			setOrderStatus(status);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<Tr  >
			<TdCustomer>
				<ImageContainer><Image src={user?.img}></Image></ImageContainer>
				<Link to={`/order/${order._id}`}>
					<Name>{user.name || order.userId}</Name>
				</Link>
			</TdCustomer>
			<TdDate>{order.createdAt}</TdDate>
			<TdAmount>Rs {order.amount}</TdAmount>
			<TdStatus><Status status={orderStatus}>{orderStatus}</Status></TdStatus>
			<Button color="red" onClick={()=>handleStatus("cancelled")}>Cancel</Button> 
			<Button color="green" onClick={()=>handleStatus("delivered")}>Delivered</Button> 
			<DeleteIcon onClick={()=>handleDeleteOrder(order._id)}/>
		</Tr>
	)
}

export default TransactionRow
