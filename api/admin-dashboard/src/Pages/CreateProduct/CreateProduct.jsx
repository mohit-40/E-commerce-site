import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
import { storage } from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Container = styled.div`
	margin: 1rem;
`
const Title = styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const Form = styled.form`
	margin-top:1rem;
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width:300px;
	width:100%;
	margin-top:1rem;
`
const Label = styled.label`
	font-size: 1.1rem;
	margin-bottom:0.5rem;
	color:gray;
`
const Input = styled.input`
	outline:none;
	height:30px;
	color:gray;
	font-size: 1rem;
	padding:5px;
	`
const Select = styled.select`
	height:40px;
	font-size: 1rem;
	color: gray;
`
const Option = styled.option``
const CreateButton = styled.button`
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
	const history = useHistory();
	const [input, setInput] = useState({});
	const [file, setFile] = useState("")
	const handleChange = (e) => {
		setInput(prev => ({
			...prev,
			[e.target.name]: e.target.value
		})) 
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if(file){

				const fileName = Date.now() + file.name;
				const imgRef = ref(storage, `/products/${fileName}`);
				const uploadTask = uploadBytesResumable(imgRef, file);
				uploadTask.on('state_changed',
				(snapshot) => { },
				(error) => { 
					console.log(error.message);
				},
				async() => { 
					getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
						const product = {
							...input,
							category: input.categories.split(","),
							color: input.color.split(","),
							size: input.size.split(","),
							img:downloadURL
						}
						const newProductRes = await userRequest.post("/product/", product);
						history.push("/product/" + newProductRes.data._id);
						console.log(newProductRes.data ,downloadURL);
					});
				}
				);
			}
			else{
				const product = {
					...input,
					category: input.categories.split(","),
					color: input.color.split(","),
					size: input.size.split(",")
				}
				const newProductRes = await userRequest.post("/product/", product);
				history.push("/product/" + newProductRes.data._id); 
			}
		} catch (error) {
			console.log(error.message);
		}
	}


	return (
		<Container>
			<Title>New Product</Title>
			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<Label>Image</Label>
					<Input type="file" required onChange={(e) => setFile(e.target.files[0])} />
				</InputContainer>
				<InputContainer>
					<Label>Product Name</Label>
					<Input type="text" required placeholder="Product Name" onChange={(e) => handleChange(e)} name="name" />
				</InputContainer>
				<InputContainer>
					<Label>Description</Label>
					<Input type="text" required placeholder="Description" onChange={(e) => handleChange(e)} name="desc" />
				</InputContainer>
				<InputContainer>
					<Label>Categories</Label>
					<Input type="text" required placeholder="jean,shirt" onChange={(e) => handleChange(e)} name="categories" />
				</InputContainer>
				<InputContainer>
					<Label>Size</Label>
					<Input type="text" required placeholder="sm,lr" onChange={(e) => handleChange(e)} name="size" />
				</InputContainer>
				<InputContainer>
					<Label>Color</Label>
					<Input type="text" required placeholder="red,green" onChange={(e) => handleChange(e)} name="color" />
				</InputContainer>
				<InputContainer>
					<Label>Stock</Label>
					<Input type="number" required placeholder="123" onChange={(e) => handleChange(e)} name='stock' />
				</InputContainer>
				<InputContainer>
					<Label>Price</Label>
					<Input type="number" required placeholder="123" onChange={(e) => handleChange(e)} name='price' />
				</InputContainer>
				<InputContainer>
					<Label>Cost</Label>
					<Input type="number" required placeholder="123" onChange={(e) => handleChange(e)} name='cost' />
				</InputContainer>
				<InputContainer>
					<Label>Active</Label>
					<Select onChange={(e) => handleChange(e)} name="active" required >
						<Option value={true}>Yes</Option>
						<Option value={false}>No</Option>
					</Select>
				</InputContainer>
				<CreateButton type="submit">Create</CreateButton>
			</Form>
		</Container>
	)
}

export default CreateProduct
