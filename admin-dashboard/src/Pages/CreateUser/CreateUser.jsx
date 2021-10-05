import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
	margin:1rem;
`
const Heading=styled.div`
	font-size: 2rem;
	font-weight:600;
`
const Form=styled.form`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 2rem;
	max-width: 800px;
	width:100%

`
const InputContainer=styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	margin:0.5rem;
`
const Label=styled.label`
	font-size: 1.1rem;
	font-weight: 500;
	color:gray;
	margin-bottom: 5px;
`
const Input=styled.input`
	outline:none;
	height:30px;
	border-radius: 5px;
	border: 2px solid gray;
	`
const RadioContainer=styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Select=styled.select`
	height: 30px;
	border-radius: 5px;
	border: 2px solid gray;
	color:gray;
	font-size: 1.1rem;
`
const Option =styled.option``
const Button=styled.button`
	padding:5px 10px ;
	margin:1rem 0;
	background-color: darkblue;
	color: white;
	border-radius:10px;
	width: 100%;
	font-size: 1rem;

`

const CreateUser = () => {
	return (
		<Container>
			<Heading>New User</Heading>
			<Form>
				<InputContainer>
					<Label>Username</Label>
					<Input placeholder="john"/>
				</InputContainer>
				<InputContainer>
					<Label>Full Name</Label>
					<Input placeholder="John smith"/>
				</InputContainer>
				<InputContainer>
					<Label>Email</Label>
					<Input placeholder="john@gmail.com"/>
				</InputContainer>
				<InputContainer>
					<Label>Phone</Label>
					<Input placeholder="+1 15616512"/>
				</InputContainer>
				<InputContainer>
					<Label>Password</Label>
					<Input placeholder="Password"/>
				</InputContainer>
				<InputContainer>
					<Label>Address</Label>
					<Input placeholder="NEW YORK CITY"/>
				</InputContainer>
				<InputContainer>
					<Label>Gender</Label>
					<RadioContainer>
						<Input type="radio" name="gender" id="male" value ="Male" />
						<Label for="male">Male</Label>
						<Input type="radio"  name="gender" id="female" value ="Female" />
						<Label for="female">Female</Label>
						<Input type="radio" name="gender" id="other" value ="Other" />
						<Label for="other">Other</Label>
					</RadioContainer>
				</InputContainer>
				<InputContainer>
					<Label>Active</Label>
					<Select>
						<Option default>Choose</Option>
						<Option value="Yes">Yes</Option>
						<Option value="No">No</Option>
					</Select>
				</InputContainer>
				<Button>Create</Button>
			</Form>
		</Container>
	)
}

export default CreateUser
