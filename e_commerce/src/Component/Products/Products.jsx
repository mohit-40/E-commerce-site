import React from 'react'
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { popularProducts } from '../../data'
import styled from 'styled-components'

const Container = styled.div``
const Heading = styled.div`
	text-align:center;
	font-size:35px;
	font-weight: 600;
	color:#fca103 ;
	/* background-color: #fca103; */
`
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	`
const IconContainer = styled.div`
	position:absolute;
	top:0;
	height:100%;
	width:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	background: #afebf461;
	z-index:1000;
`
const Item = styled.div`
	flex:1;
	max-width: 500px;
	background-color: rgba(0, 0, 0, 0.2);
	margin:10px 20px;
	position:relative;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover ${IconContainer}{
		opacity:1;
	}
`
const ImageContainer = styled.div`
	height:400px;
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position:relative;
`
const Image = styled.img`
	height:300px;
	position:relative;
	z-index:999;
`
const Icon = styled.div`
	margin-left:10px;
	cursor:pointer;
	&:hover{
		transform:scale(1.5);
	}
`
const Circle = styled.div`
	height: 350px;
	width: 350px;
	border-radius:50%;
	background-color:#fca103;
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
	z-index:0;
`

const Products = () => {
	return (
		<Container>
			<Heading>Popular Products</Heading>
			<Wrapper>

				{popularProducts.map((item) => {
					return (
						<Item>
							<ImageContainer>
								<Circle />
								<Image src={item.img} />
							</ImageContainer>
							<IconContainer>
								<Icon> <FavoriteBorderOutlined style={{ fontSize: 30 }} /></Icon>
								<Icon> <SearchOutlined style={{ fontSize: 30 }} /> </Icon>
								<Icon> <ShoppingCartOutlined style={{ fontSize: 30 }} /></Icon>
							</IconContainer>
						</Item>
					)
				})}
			</Wrapper>
		</Container>
	)
}

export default Products
