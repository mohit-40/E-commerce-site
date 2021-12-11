import React, { useEffect, useState } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"

import { Add, Remove } from '@material-ui/icons'
import Navbar from '../../Component/Navbar/Navbar'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Footer from '../../Component/Footer/Footer'
import Announcement from '../../Component/Announcement/Announcement'
import { userRequest } from '../../requestMethod';



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
	const currentUser = useSelector(state => state.user.currentUser)

	const history=useHistory();
	const cartState = useSelector(state => state.cart);
	const STRIPE_PUBLISHABLE_KEY="pk_test_51JmHbxSHvqjlrY0LQsjd7nxpZSTnxD3z0fQ8Dwm5QKiYEr4hMVcR8dMVcg1nnvOuG69piys70A1RJ6mUxBqhaRrY00Nxwk8v5W"
	const [stripeToken, setStripeToken] = useState(null);
	const onToken=(token)=> setStripeToken(token); 
	useEffect(()=>{
		const makeRequest = async()=>{
			try {
				const res = await userRequest.post("/checkout/payment"+currentUser._id,{ tokenId:stripeToken.id ,amount:cartState.totalPrice })
				history.push("/success")
			} catch (error) {
				history.push("/error")

			}
		}
		stripeToken&& cartState.totalPrice>=1 && makeRequest();
	},[stripeToken,history,cartState])	

	const handleQuantity = (what) => {

	}

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
						{cartState.totalQuantity === 0 ? <h1>Please Add item to cart to proceed </h1> : cartState.products.map(product => {
							return (
								<a key={product.product._id} >
									<Product>
										<ProductImageContainer>
											<ProductImage src={product.product.img}></ProductImage>
										</ProductImageContainer>
										<ProductDetail>
											<ProductName><b>Product:</b>{product.product.name}</ProductName>
											<ProductId> <b>ID:</b>{product.product._id}</ProductId>
											<ProductSize><b>SIZE:</b> {product.size}</ProductSize>
											<ProductColor color={product.color} />
										</ProductDetail>
										<ProductPriceContainer>
											<ProductCountContainer>
												<Add onClick={handleQuantity("increment")} />
												<ProductCount>{product.quantity}</ProductCount>
												<Remove onClick={handleQuantity("decrement")} />
											</ProductCountContainer>
											<ProductPrice>Rs {product.product.price * product.quantity}</ProductPrice>
										</ProductPriceContainer>
									</Product>
									<hr />
								</a>
							)
						})}
					</ProductContainer>


					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItemContainer>
							<SummaryItem>
								<SummaryItemText>Subtotal: </SummaryItemText>
								<SummaryItemPrice>Rs {cartState.totalPrice}</SummaryItemPrice>
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
								<SummaryItemPrice><b>Rs {cartState.totalPrice}</b></SummaryItemPrice>
							</SummaryItem>
						</SummaryItemContainer>
						<Button><Link className='text-link' to="/product-list">CONTINUE SHOPPING</Link></Button>

						{
							currentUser?

							<StripeCheckout
								name="Lama Shop"
								image="https://avatars.githubusercontent.com/u/1486366?v=4"
								billingAddress
								shippingAddress
								description={`Your total is Rs ${cartState.totalPrice}`}
								amount={cartState.totalPrice}
								token={onToken}
								stripeKey={STRIPE_PUBLISHABLE_KEY}
							>
								<Button>CHECKOUT NOW</Button>
							</StripeCheckout>
							:
							<Button disabled >CHECKOUT NOW</Button>
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
