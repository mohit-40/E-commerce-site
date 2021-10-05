import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
	margin: 1rem;
`
const Title=styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const Form=styled.form`
	margin-top:1rem;
`
const InputContainer=styled.div`
	display: flex;
	flex-direction: column;
	max-width:300px;
	width:100%;
	margin-top:1rem;
`
const Label=styled.label`
	font-size: 1.1rem;
	margin-bottom:0.5rem;
	color:gray;
`
const Input=styled.input`
	outline:none;
	height:30px;
	color:gray;
	font-size: 1rem;
	padding:5px;
	`
const Select=styled.select`
	height:40px;
	font-size: 1rem;
	color: gray;
`
const Option=styled.option``
const CreateButton=styled.button`
	color:white;
	background-color: darkblue;
	margin-top: 20px;
	padding:10px;
	font-size:1rem;
	font-weight: 600;
	max-width:300px;
	border-radius: 10px;
	width:100%;
`

const CreateProduct = () => {
	return (
		<Container>
			<Title>New Product</Title>
			<Form>
				<InputContainer>
					<Label>Image</Label>
					<Input type="file"/>
				</InputContainer>
				<InputContainer>
					<Label>Product Name</Label>
					<Input type="text" placeholder="Product Name"/>
				</InputContainer>
				<InputContainer>
					<Label>Stock</Label>
					<Input type="text" placeholder="123"/>
				</InputContainer>
				<InputContainer>
					<Label>Active</Label>
					<Select>
						<Option>Yes</Option>
						<Option>No</Option>
					</Select>
				</InputContainer>
				<CreateButton>Create</CreateButton>
			</Form>
		</Container>
	)
}

export default CreateProduct
