import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { userRequest } from '../../requestMethod';
import WishListItem from '../WishListItem/WishListItem';
const ProductContainer = styled.div`
	flex:3;
	display: flex;
	flex-direction: column;
	`

function WishListBottom() {
	const currentUserId = useSelector(state=> state.user.currentUserId)  
	const [wishList ,setWishList] =useState([]);
	useEffect(()=>{
		const fetchWishList = async()=>{
			try {
				const res = await userRequest.get("/wishList/"+currentUserId);	
				setWishList(res.data);
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchWishList();
	},[currentUserId])

	return (
		<div>
			<ProductContainer>
				{wishList.length === 0 ? <h3>No item in wishList</h3> : wishList.map(wishListItem => {
					return (
						<div key={wishListItem._id}>
							<WishListItem wishListItem={wishListItem} wishList={wishList} setWishList={setWishList} />
							<hr />
						</div>
					)
				})}
			</ProductContainer>
		</div>
	)
}

export default WishListBottom
