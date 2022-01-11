import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {useSelector , useDispatch} from "react-redux"
import {login} from "../../redux/exportAllAction"

const LoginContainer=styled.div`
	height:80vh;
	width:100%;
`
const LoginWrapper=styled.div`
	width:500px;
	max-width:500px;
	margin: 10% auto;
`
const LoginHeading = styled.div`
	font-size:25px;
`
const LoginForm=styled.div`
	display:flex;
	flex-direction:column;

`
const LoginInput=styled.input`
	outline:none;
	height:30px;
	border-radius: 5px;
	border: 2px solid gray;
	margin-top:20px;
`
const LoginButton=styled.button`
	padding:5px 10px ;
	margin:1rem 0;
	background-color: darkblue;
	color: white;
	border-radius:10px;
	width: 100%;
	font-size: 1rem;
	cursor:pointer;
	&:hover{
		background: #00023b;
	}
`

function Login() {
	const [input, setInput] = useState({})

	const handleChange= (e)=>{
		setInput(prev=>({
			...prev,
			[e.target.name]:e.target.value
		}))
	}
	const dispatch=useDispatch();
	const handleSubmit=async(e)=>{
		e.preventDefault();
		await dispatch(login(input.email, input.password))
	}
	return (
		<LoginContainer>
			<LoginWrapper>
				<LoginHeading>Login</LoginHeading>
				<LoginForm onChange = {handleChange} >
					<LoginInput name='email' type="email" required placeholder="Email" />
					<LoginInput name='password' type="password" required  placeholder="Password"/>
					<LoginButton type="submit" onClick={handleSubmit}>Login</LoginButton>
				</LoginForm>
			</LoginWrapper>
		</LoginContainer>
	)
}

export default Login;