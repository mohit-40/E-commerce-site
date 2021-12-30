import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components' 

import Navbar from '../../Component/Navbar/Navbar'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Footer from '../../Component/Footer/Footer'
import Announcement from '../../Component/Announcement/Announcement'
import { userRequest } from '../../requestMethod';
import CartItem from '../CartItem/CartItem';
import axios from 'axios';
import CartBottom from '../CartBottom/CartBottom'
import WishListBottom from '../WishListBottom/WishListBottom'



const Container = styled.div``
const Wrapper = styled.div`
	min-height: calc(100vh - 120px);
	display: flex;
	flex-direction:column;
	margin:20px 20px;
	`
const Heading = styled.div`
	text-align:center;
	font-size:2.5rem;
	font-weight:600;
	color:blue;
	`
const Top = styled.div`
	display: flex;
	justify-content:space-between;
	background-color: lightcyan;
	`

const TopLinks = styled.div`
	display: flex;
	margin:10px 0;
	`
const TopLink = styled.div`
	margin:0 20px;
	cursor: pointer;
	color:brown;
	font-size: 1.2rem;
	font-weight: 600;
	`

const Cart = () => {
	const [cartSelected, setCartSelected] =useState(true);
	const cartItems = useSelector(state => state.cart.cartItems)
	const wishList = useSelector(state => state.wishList.wishListItems)
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>

				<Heading>CART</Heading>
				<Top>
					<TopLinks>
						<TopLink onClick={()=>setCartSelected(true)}>YOUR BAG({cartItems.length})</TopLink>
						<TopLink onClick={()=>setCartSelected(false)}>YOUR WISHLIST({wishList.length})</TopLink>
					</TopLinks>
				</Top>
				{
					cartSelected? <CartBottom/> : <WishListBottom/>
				}
			
			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Cart