import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StripeCheckout from "react-stripe-checkout"; 

import Navbar from '../../Component/Navbar/Navbar'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Footer from '../../Component/Footer/Footer'
import Announcement from '../../Component/Announcement/Announcement'
import { userRequest } from '../../requestMethod';
import CartItem from '../CartItem/CartItem';
import axios from 'axios';



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
const Bottom = styled.div`
	display:flex;
	flex-wrap: wrap;
	`
const ProductContainer = styled.div`
	flex:3;
	display: flex;
	flex-direction: column;
	`

const Summary = styled.div`
	flex:1;
	border: 2px solid brown;
	border-radius: 20px;
	box-sizing: border-box;
	margin:10px 0;
	padding:20px 20px;
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 50vh;
`
const SummaryTitle = styled.div`
	font-size: 1.7rem;
	font-weight: 600;
`
const SummaryItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5px 0px;
`
const SummaryItemText = styled.div``
const SummaryItemPrice = styled.div``
const Button = styled.button`
	background: #000;
	color:white;
	padding:5px;
	font-size: 1rem;
	cursor: pointer;
`

const Cart = () => {
	const history = useHistory();
	const currentUserId = useSelector(state => state.user.currentUserId);
	const cartItems = useSelector(state => state.cart.cartItems);
	const STRIPE_PUBLISHABLE_KEY = "pk_test_51JmHbxSHvqjlrY0LQsjd7nxpZSTnxD3z0fQ8Dwm5QKiYEr4hMVcR8dMVcg1nnvOuG69piys70A1RJ6mUxBqhaRrY00Nxwk8v5W"
	const [stripeToken, setStripeToken] = useState(null);
	const onToken = (token) => setStripeToken(token);
	const [totalPrice ,setTotalPrice] =useState(0);  

	useEffect(()=>{
		const fetchCartPrice=async()=>{
			try {
				if(currentUserId){
					const res = await userRequest.get(`/cart/${currentUserId}/price`);
					setTotalPrice(res.data);
				}
				else {
					const res = await axios.post(`/cart/price` , {userCartItems: cartItems});
					setTotalPrice(res.data);
				}
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchCartPrice();
	},[currentUserId , cartItems ]) 

	useEffect(() => { 
		const makeRequest = async () => {
			try {
				const userCartItemsRes = await userRequest("/"+currentUserId);
				const userCartItems =userCartItemsRes.data;  
				const res = await userRequest.post("/checkout/payment/" + currentUserId, { tokenId: stripeToken.id, amount: totalPrice, order: userCartItems })
				history.push("/success")
			} catch (error) {
				history.push("/error")
			}
		}
		stripeToken && totalPrice >= 1 && makeRequest();
	}, [stripeToken, history, totalPrice, currentUserId ,])



	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>

				<Heading>CART</Heading>
				<Top>
					<TopLinks>
						<TopLink>YOUR BAG(1)</TopLink>
						<TopLink>YOUR WISHLIST(0)</TopLink>
					</TopLinks>
				</Top>

				<Bottom>

					<ProductContainer>
						{cartItems.length === 0 ? <h1>Please Add item to cart to proceed </h1> : cartItems.map(cartItem => {
							return (
								<div key={cartItem.date}>
									<CartItem cartItem = {cartItem }  totalPrice = {totalPrice} setTotalPrice={setTotalPrice}/>
									<hr />
								</div>
							)
						})}
					</ProductContainer>


					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItemContainer>
							<SummaryItem>
								<SummaryItemText>Subtotal: </SummaryItemText>
								<SummaryItemPrice>Rs {totalPrice}</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText>Estimated Shipping: </SummaryItemText>
								<SummaryItemPrice>+ Rs 50</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText>Total Discount: </SummaryItemText>
								<SummaryItemPrice>- Rs 50</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText><b>Total:</b></SummaryItemText>
								<SummaryItemPrice><b>Rs {totalPrice}</b></SummaryItemPrice>
							</SummaryItem>
						</SummaryItemContainer>
						<Button><Link className='text-link' to="/product-list">CONTINUE SHOPPING</Link></Button>

						{
							currentUserId ?

								<StripeCheckout
									name="My shop"
									image="https://www.w3schools.com/w3images/avatar6.png"
									billingAddress
									shippingAddress
									description={`Your total is Rs ${totalPrice}`}
									amount={totalPrice}
									token={onToken}
									stripeKey={STRIPE_PUBLISHABLE_KEY}
								>
									<Button>CHECKOUT NOW</Button>
								</StripeCheckout>
								:
								<Button disabled >LOGIN TO CHECKOUT NOW</Button>
						}

					</Summary>
				</Bottom>


			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Cart
