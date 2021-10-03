import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Component/Navbar/Navbar'

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
	return (
		<>
		<Navbar />
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="Username" />
					<Input placeholder="Password" />
					<Button type="signin">SIGN IN</Button>
					<Button type="register">Register</Button>
				</Form>
				<Agreement>By signing in you agree to the term and condition.</Agreement>
			</Wrapper>
		</Container>
		</>
	)
}

export default Login
