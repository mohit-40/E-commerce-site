import React from 'react'
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import { popularProducts } from '../../data'
import styled from 'styled-components'

const Container = styled.div``
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
`
const Item = styled.div`
	flex:1;
	background-color: rgba(0, 0, 0, 0.2);
	margin:10px 20px;
	position:relative;
	&:hover ${IconContainer}{
		opacity:1;
	}
`
const ImageContainer = styled.div`
	height:300px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Image = styled.img`
	height:300px;
`
const Icon = styled.div`
	margin-left:10px;
	cursor:pointer;
	&:hover{
		transform:scale(1.2);
	}
`

const Products = () => {
	return (
		<Container>
			<Wrapper>

				{popularProducts.map((item) => {
					return (
						<Item>
							<ImageContainer>
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
