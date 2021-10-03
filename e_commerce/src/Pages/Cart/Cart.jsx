import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Footer from '../../Component/Footer/Footer'
import Announcement from '../../Component/Announcement/Announcement' 
import { Add, Remove } from '@material-ui/icons'

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
const TopButton = styled.button`
	cursor: pointer;
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

const ProductImageContainer=styled.div`
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
	background: #000;
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
						<Product>
							<ProductImageContainer>
								<ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></ProductImage>
							</ProductImageContainer>	
							<ProductDetail>
								<ProductName><b>Product:</b>JumpSuit</ProductName>
								<ProductId> <b>ID:</b> 123456789</ProductId>
								<ProductSize><b>SIZE:</b> XL</ProductSize>
								<ProductColor />
							</ProductDetail>
							<ProductPriceContainer>
								<ProductCountContainer>
									<Add />
									<ProductCount>5</ProductCount>
									<Remove />
								</ProductCountContainer>
								<ProductPrice>Rs 500</ProductPrice>
							</ProductPriceContainer>
						</Product>
						<hr />
						<Product>
							<ProductImageContainer>
								<ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"></ProductImage>
							</ProductImageContainer>	
							<ProductDetail>
								<ProductName><b>Product:</b>JumpSuit</ProductName>
								<ProductId> <b>ID:</b> 123456789</ProductId>
								<ProductSize><b>SIZE:</b> XL</ProductSize>
								<ProductColor />
							</ProductDetail>
							<ProductPriceContainer>
								<ProductCountContainer>
									<Add />
									<ProductCount>5</ProductCount>
									<Remove />
								</ProductCountContainer>
								<ProductPrice>Rs 500</ProductPrice>
							</ProductPriceContainer>
						</Product>
						<hr />
					</ProductContainer>


					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItemContainer>
							<SummaryItem>
								<SummaryItemText>Subtotal: </SummaryItemText>
								<SummaryItemPrice>Rs 500</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText>Estimated Shipping: </SummaryItemText>
								<SummaryItemPrice>Rs 50</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText>Total Discount: </SummaryItemText>
								<SummaryItemPrice>Rs 100</SummaryItemPrice>
							</SummaryItem>
							<SummaryItem>
								<SummaryItemText><b>Total:</b></SummaryItemText>
								<SummaryItemPrice><b>Rs 500</b></SummaryItemPrice>
							</SummaryItem>
						</SummaryItemContainer>
						<Button>CHECKOUT NOW</Button>
						<Button><Link className='text-link' to="/product-list">CONTINUE SHOPPING</Link></Button>
					</Summary>
				</Bottom>


			</Wrapper>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Cart
