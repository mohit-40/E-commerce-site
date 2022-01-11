import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { storage } from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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
	const [input, setInput] = useState({})
	const handleChange= (e)=>{
		setInput(prev=>({
			...prev,
			[e.target.name]:e.target.value
		})) 
	}
	const [status,setStatus] = useState("")
	const [file , setFile ] =useState("")

	const handleSubmit=async(e)=>{
		e.preventDefault();
		try {
			if(file){

				const fileName = Date.now() + file.name;
				const imgRef = ref(storage, `users/${input.username}/${fileName}`);
				const uploadTask = uploadBytesResumable(imgRef, file);
				uploadTask.on('state_changed',
				(snapshot) => { },
				(error) => { 
					console.log(error.message);
				},
				async() => { 
					getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
						const newUser = {
							...input,
							img:downloadURL
						}
						const res = await axios.post("/auth/register" , newUser );
						setStatus("new user create");
						setInput("");
						const resetStatus = setInterval(() => {
							setStatus("")
						}, 3000);
						setTimeout(() => {
							clearInterval(resetStatus);
						}, 3000);
					});
				}
				);
			}
			else {
				const newUser = {
					...input, 
				}
				const res = await axios.post("/auth/register" , newUser );
				setStatus("new user create");
				setInput("");
				const resetStatus = setInterval(() => {
					setStatus("")
				}, 3000);
				setTimeout(() => {
					clearInterval(resetStatus);
				}, 3000);
			}
		} 
		catch (error) {
			setStatus(error.message)
			const resetStatus = setInterval(() => { setStatus("") }, 3000);
			setTimeout(() => { clearInterval(resetStatus); }, 3000);
			console.log(error)
		}
	}

	return (
		<Container>

			<Heading>New User</Heading>
			{status}
			<Form onChange={handleChange} >
				<InputContainer>
					<Label>Profile Picture</Label>
					<input type="file" required onChange={(e) => setFile(e.target.files[0])}></input>
				</InputContainer>
				<InputContainer  >
					<Label>Username</Label>
					<Input name="username" placeholder="john"/>
				</InputContainer>
				<InputContainer  >
					<Label>Full Name</Label>
					<Input name="name" placeholder="John smith"/>
				</InputContainer>
				<InputContainer   >
					<Label>Email</Label>
					<Input name="email" placeholder="john@gmail.com"/>
				</InputContainer>
				<InputContainer  >
					<Label>Phone</Label>
					<Input  name="phone" placeholder="+1 15616512"/>
				</InputContainer>
				<InputContainer  >
					<Label>Password</Label>
					<Input name="password" placeholder="Password" type="password"/>
				</InputContainer>
				<InputContainer  >
					<Label>Address</Label>
					<Input name="address" placeholder="NEW YORK CITY"/>
				</InputContainer>
				<InputContainer  >
					<Label>Gender</Label>
					<RadioContainer name="gender">
						<Input type="radio" name="gender" id="male" value ="Male" />
						<Label htmlFor="male">Male</Label>
						<Input type="radio"  name="gender" id="female" value ="Female" />
						<Label htmlFor="female">Female</Label>
						<Input type="radio" name="gender" id="other" value ="Other" />
						<Label htmlFor="other">Other</Label>
					</RadioContainer>
				</InputContainer>
				<Button onClick={handleSubmit}>Create</Button>
			</Form>
		</Container>
	)
}

export default CreateUser
