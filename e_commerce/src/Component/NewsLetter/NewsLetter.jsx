import React from 'react'
import { Send } from "@material-ui/icons";
import styled from 'styled-components'

const Container=styled.div`
	box-sizing: border-box;
	min-height: 400px;
	height:50vh;
	justify-content: center;
	background-color:rgb(248, 214, 62);
	display: flex;
	align-items: center;
	`
const Wrapper=styled.div`
	margin:30px;
	display: flex;
	flex-direction:column;
	align-items: center;
	justify-content: center;
`
const Title=styled.div`
	font-size:4rem;
	font-weight: 600;
	margin-bottom:2rem;
	`
const Desc=styled.div`
	text-align:center;
	font-size:2rem;
	font-weight: 400;
	margin-bottom:2rem;
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
		<Wrapper>
			<Title>NewsLetter</Title>
			<Desc>Get timely update from your favourite products.</Desc>
			<InputContainer>
				<input type="text" placeholder="Your Email"/>
				<Button><Send /> </Button>
			</InputContainer>
		</Wrapper>
		</Container>
	)
}

export default NewsLetter
