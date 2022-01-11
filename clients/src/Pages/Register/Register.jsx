import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'; 
import styled from 'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import { publicRequest } from '../../requestMethod';

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

	const history=useHistory();
	const [error ,setError ] =useState("")
	const [detail, setDetail] = useState("");
	const handleChange=(e)=>{
		setDetail((prev)=> ({
			...prev,
			[e.target.name] : e.target.value
		}))
	}
	const handleSubmit =async(e)=>{
		e.preventDefault()
		if(detail.comfirmPassword !== detail.password ) setError("password and comfirm password do not match")
		else{
			try {
				const res = await publicRequest.post("/auth/register", detail);
				history.push("/login");
			} catch (error) {
				setError(error.message)
			}
		}
	}
	return ( 
		<>
			<Navbar />	
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form onChange={handleChange}>
						<Input name="name" placeholder="name" required/>
						<Input name="lastName" placeholder="last name"  required/>
						<Input name="username" placeholder="username" required/>
						<Input name="email" type="email" placeholder="email" required/>
						<Input name="password" type="password" placeholder="password"  required/>
						<Input  name="comfirmPassword" type="password" placeholder="confirm password" required/>
						<Agreement>
							By creating an account, I consent to the processing of my personal
							data in accordance with the <b>PRIVACY POLICY</b>
						</Agreement>

						<Button type="register" onClick={handleSubmit}>REGISTER</Button>
						{error && error}
						<Button type="signin" onClick={()=>{ history.push("/login") }} >LOG IN</Button>
						
					</Form>
				</Wrapper>
			</Container>
		</>
	)
}

export default Register
