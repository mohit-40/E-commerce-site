import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import axios from 'axios'
import { userRequest } from '../../requestMethod'
import {useSelector} from "react-redux"

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


function CartItem({ cartItemId }) {

	const [product, setProduct] = useState({})
	const [productDetail , setProductDetail] =useState({})
	const currentUserId = useSelector(state=> state.user.currentUserId)
	useEffect(()=>{
		const fetchProduct= async()=>{
			try {
				console.log("in fetch product ")
				const productDetailRes = await userRequest.get("/cart/cartItem/"+currentUserId + "/"+cartItemId)
				setProductDetail(productDetailRes.data);
				const res = await axios.get("/product/"+productDetailRes.data.productId)
				setProduct(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchProduct();
	},[ product.price,cartItemId  , currentUserId]) 
	const handleQuantity = (what) => { }

	return ( 
			<Product>
				<ProductImageContainer>
					<ProductImage src={product?.img}></ProductImage>
				</ProductImageContainer>
				<ProductDetail>
					<ProductName><b>Product:</b>{product?.name}</ProductName>
					<ProductId> <b>ID:</b>{product?._id}</ProductId>
					<ProductSize><b>SIZE:</b> {productDetail.size}</ProductSize>
					<ProductColor color={productDetail.color} />
				</ProductDetail>
				<ProductPriceContainer>
					<ProductCountContainer>
						<Add onClick={handleQuantity("increment")} />
						<ProductCount>{productDetail.quantity}</ProductCount>
						<Remove onClick={handleQuantity("decrement")} />
					</ProductCountContainer>
					<ProductPrice>Rs {product?.price * productDetail.quantity}</ProductPrice>
				</ProductPriceContainer>
			</Product> 
	)
}

export default CartItem
