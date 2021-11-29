import React from 'react'
import {Link } from 'react-router-dom'
import styled from 'styled-components'
import { categories } from '../../data'

const Container=styled.div``
const Wrapper=styled.div`
	display: flex;
	flex-wrap:wrap;
	justify-content: center;
	align-items: center;
`
const Item=styled.div`
	margin:20px 10px;
	position:relative;
	`
const ImageContainer=styled.div`
	height:700px;
`
const Image=styled.img`
	height: 100%;
	width:100%;
`
const InfoContainer=styled.div`
	position:absolute;
	top:0;
	height:100%;
	width:100%;
	display: flex;																	
	flex-direction:column;
	align-items: center;
	justify-content: center;
`
const Title=styled.div`
	color:white;
	font-size:35px;
	font-weight:600;
	margin-bottom: 20px;
	&:hover{
		transform:scaleX(1.1);
	}
	`
const Button=styled.button`
	padding:10px 15px;
	cursor: pointer;
	outline:none;
	&:hover{
		background-color: wheat;
		transform:scaleX(1.1);
	}	
`


const Categories = () => {
	return (
		<Container>
			<Wrapper>
				{categories.map((category)=>{
					return(
						<Item key={category._id}>
							<ImageContainer>
								<Image src={category.img}/>
							</ImageContainer>
							<InfoContainer>
								<Title>{category.title}</Title>
								<Button><Link className='text-link' to="/product-list">SHOP NOW</Link></Button>
							</InfoContainer>
						</Item>
					)
				})}
			</Wrapper>		
		</Container>
	)
}

export default Categories
