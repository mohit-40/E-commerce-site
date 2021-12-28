import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import {login} from "../../redux/exportAllAction"

const Container = styled.div`
	width:100vw;
	height:calc(100vh - 60px);
	background :url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Wrapper = styled.div`
	background-color: white;
	max-width:400px;
	width:100%;
	height:fit-content;
	padding:20px 20px;
`
const Title = styled.div`
	font-size: 2rem;
	color: brown;
	font-weight: 600;
`
const Form = styled.form`
	margin: 20px 0;
`
const Input = styled.input` 
	width:100%;
	margin: 5px 0;
	height: 30px;
	font-size: 18px;
`

const Button = styled.button`
	padding:5px;
	font-size: 18px;
	width:100%;
	margin:5px 0;
	background-color: ${(props)=> props.type==="signin"? "rgba(96, 243, 60, 0.836)" : "rgba(13, 81, 228, 0.836);"};
`
const Agreement = styled.div`
	text-align: center;
`

const Login = () => {
	const history=useHistory()
	const [email,setEmail] = useState("");
	const [password ,setPassword] =useState("");
	const dispatch=useDispatch();
	const userState = useSelector(state => state.user);
	const handleSubmit=async(e)=>{
		e.preventDefault();
		await dispatch(login(email, password))
	}
	return ( 
		<>
		<Navbar />
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="Username" required onChange={ (e)=> setEmail(e.target.value)}  />
					<Input placeholder="Password" type="password" required onChange={ (e)=> setPassword(e.target.value)} />
					<Button type="signin" onClick={handleSubmit}>{userState.isLoading? "loading" :"SIGN IN" }</Button>
					{ userState.error && "something went wrong ..." }
					<Button type="registor" onClick={()=>{ history.push("/register") }} >REGISTER</Button>
				</Form>
				<Agreement>By signing in you agree to the term and condition.</Agreement>
			</Wrapper>
		</Container>
		</>
	)
}

export default Login
