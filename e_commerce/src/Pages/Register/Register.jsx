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
	max-width:800px;
	width:100% 0;
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
	display: flex;
	justify-content: center;
  	flex-wrap: wrap;
`
const Input = styled.input` 
	min-width:45%;
	margin: 5px 5px;
	height: 30px;
	font-size: 18px;
`
const Button = styled.button`
	padding:5px;
	font-size: 18px;
	font-weight: 600;
	width:100%;
	margin:5px;
	background-color: ${(props) => props.type === "signin" ? "rgba(96, 243, 60, 0.836)" : "rgba(13, 81, 228, 0.836);"};
`
const Agreement = styled.div`
	margin-top:10px;
	text-align: center;
`

const Register = () => {
	return (
		<>
			<Navbar />	
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form>
						<Input placeholder="name" required/>
						<Input placeholder="last name" required/>
						<Input placeholder="username" required/>
						<Input type="email" placeholder="email" required/>
						<Input type="password" placeholder="password" required/>
						<Input type="password" placeholder="confirm password" required/>
						<Agreement>
							By creating an account, I consent to the processing of my personal
							data in accordance with the <b>PRIVACY POLICY</b>
						</Agreement>
						<Button type="register">REGISTER</Button>
						<Button type="signin">SIGN IN</Button>
					</Form>
				</Wrapper>
			</Container>
		</>
	)
}

export default Register
