import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons' 
import { publicRequest, userRequest } from '../../requestMethod'
import {useDispatch, useSelector} from "react-redux"
import { deleteItem, updateItem } from '../../redux/exportAllAction'
import {Link} from "react-router-dom"

const Product = styled.div`
	height:30vh;
	display: flex;
	margin: 10px 0;
	`

const ProductImageContainer = styled.div`
	flex: 1;
	margin-right: 20px;
	`
const ProductImage = styled.img`
	height: 100%;
	width:100%;
	`
const ProductDetail = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-size: 1.2rem;
	`
const ProductName = styled.div`
	font-size: 1.5rem;
	`
const ProductId = styled.div``
const ProductSize = styled.div``
const ProductColor = styled.div`
	height:25px;
	width:25px;
	border-radius:50%;
	background: ${props => props.color};
	border:2px solid gray;
`
const ProductPriceContainer = styled.div`
	flex: 1;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`
const ProductCountContainer = styled.div`
	display: flex;
	align-items: center;
`
const ProductCount = styled.div`
	border: 2px solid blue;
	width:30px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const ProductPrice = styled.div``


function CartItem({ cartItem }) {

	const dispatch =useDispatch();
	const [product, setProduct] = useState({}) 
	const currentUserId = useSelector(state=> state.user.currentUserId)  


	useEffect(()=>{
		const fetchProduct= async()=>{
			try {
				const res = await publicRequest.get("/product/"+cartItem.productId)
				setProduct(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchProduct();
	},[ cartItem.productId ,currentUserId]) 
	
	const handleQuantity = async(parameter) => {
		if(currentUserId){
			if(parameter === "increment"){
				await userRequest.put(`cart/${currentUserId}/${cartItem._id}`, {...cartItem , quantity: cartItem.quantity+1})
				dispatch(updateItem(cartItem._id , cartItem.date ,{...cartItem , quantity :cartItem.quantity+ 1}) )
			}
			else if(cartItem.quantity>1){
				await userRequest.put(`cart/${currentUserId}/${cartItem._id}`, {...cartItem , quantity: cartItem.quantity-1 } )
				dispatch(updateItem(cartItem._id , cartItem.date ,{...cartItem , quantity :cartItem.quantity-1}) ) 
			}
		}
		else {
			if(parameter === "increment"){
				console.log("updateItem")
				dispatch(updateItem(cartItem._id , cartItem.date , {...cartItem , quantity :cartItem.quantity+ 1}) )
			}
			else if(cartItem.quantity>1){
				dispatch(updateItem(cartItem._id , cartItem.date ,{...cartItem , quantity :cartItem.quantity-1}) )
			}

		}
	}

	const handleDelete =async()=>{
		if(currentUserId){
			console.log("herer ")
			await userRequest.delete(`/cart/${currentUserId}/${cartItem._id}`)
			dispatch(deleteItem(cartItem._id , cartItem.date))
		}
		else {
			dispatch(deleteItem(cartItem._id , cartItem.date))
		}
	}

	return ( 
			<Product>
				<ProductImageContainer>
					<ProductImage src={product?.img}></ProductImage>
				</ProductImageContainer>
				<ProductDetail>
					<ProductName><b>Product:</b><Link to={`/product/${cartItem.productId}`}>{product?.name}</Link></ProductName>
					<ProductId> <b>ID:</b>{cartItem.productId}</ProductId>
					<ProductSize><b>SIZE:</b> {cartItem.size}</ProductSize>
					<ProductColor color={cartItem.color} />
				</ProductDetail>
				<ProductPriceContainer>
					<i className="fas fa-trash" onClick={()=>handleDelete(cartItem)}></i>
					<ProductCountContainer>
						<Add onClick={()=>handleQuantity("increment")} />
						<ProductCount>{cartItem.quantity}</ProductCount>
						<Remove onClick={()=>handleQuantity("decrement")} />
					</ProductCountContainer>
					<ProductPrice>Rs {product?.price * cartItem.quantity}</ProductPrice>
				</ProductPriceContainer>
			</Product> 
	)
}

export default CartItem
