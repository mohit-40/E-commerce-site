import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import axios from 'axios'

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


function CartItem({productDetail }) {

	const [product, setProduct] = useState({})
	useEffect(()=>{
		const fetchProduct= async()=>{
			const res = await axios.get("/product/"+productDetail.productId)
			setProduct(res.data);
		}
		fetchProduct();
	},[ product.price ,productDetail ]) 
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
