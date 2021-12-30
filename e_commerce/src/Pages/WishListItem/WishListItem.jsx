import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import { userRequest } from '../../requestMethod'

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

const ProductPriceContainer = styled.div`
	flex: 1;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`
const ProductPrice = styled.div``


function WishListItem({ wishListItem ,wishList, setWishList}) {
	const currentUserId = useSelector(state => state.user.currentUserId)
	const [product, setProduct] = useState({})
	console.log(wishListItem)
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await axios.get("/product/" + wishListItem.productId)
				setProduct(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchProduct();
	}, [wishListItem.productId, currentUserId])
	const handleDelete = async(wishListItemId) => {
		try {
			await userRequest.delete(`/wishList/${currentUserId}/${wishListItemId}`);
			setWishList(wishList.filter((item)=> item._id!==wishListItemId))
		} catch (error) {
			console.log(error.message);
		}
	}


	return (
		<Product>
			<ProductImageContainer>
				<ProductImage src={product?.img}></ProductImage>
			</ProductImageContainer>
			<ProductDetail>
				<ProductName><b>Product:</b><Link to={`/product/${wishListItem.productId}`}>  {product?.name}</Link> </ProductName>
				<ProductId> <b>ID:</b>{wishListItem.productId}</ProductId>
			</ProductDetail>
			<ProductPriceContainer>
				<i className="fas fa-trash" onClick={() => handleDelete(wishListItem._id)}></i>
				<ProductPrice>Rs {product?.price}</ProductPrice>
			</ProductPriceContainer>
		</Product>
	)
}

export default WishListItem
