import React from 'react'
import { Send } from "@material-ui/icons";
import styled from 'styled-components'

const Container=styled.div`
	height:60vh;
	display: flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
	background-color:rgb(248, 214, 62);
`
const Title=styled.div`
	font-size:80px;
	font-weight: 600;
	margin-bottom:40px;
	`
const Desc=styled.div`
	font-size:30px;
	font-weight: 400;
	margin-bottom: 40px;
`
const InputContainer=styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height:40px;
	width:50%;
	input{
		font-size: 20px;
		height:100%;
		width:100%;
		margin:0;
		padding:0;
		padding-left: 10px;
		outline:none;
	}
`
const Button=styled.button`
	height:100%;
	background: rgba(250, 246, 4, 0.527);
`

const NewsLetter = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Desc>Get timely update from your favourite products.</Desc>
			<InputContainer>
				<input type="text" placeholder="Your Email"/>
				<Button><Send /> </Button>
			</InputContainer>
		</Container>
	)
}

export default NewsLetter
