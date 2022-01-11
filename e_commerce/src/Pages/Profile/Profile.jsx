import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
// import {
// 	PermIdentity,
// 	CalendarToday,
// 	MailOutline,
// 	PhoneAndroid,
// 	LocationSearching,
// 	Publish,
// 	Upload,
// } from '@mui/icons-material'
import { userRequest } from "../../requestMethod"
import { storage } from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Navbar from "../../Component/Navbar/Navbar"
import Announcement from "../../Component/Announcement/Announcement"
import Footer from "../../Component/Footer/Footer"

const Container = styled.div``
const Wrapper =styled.div`
	margin: 1rem;
`
const Top = styled.div`
	display: flex;
	justify-content: space-between;
`
const TopTitle = styled.div`
	font-size: 2rem;
	font-weight: 700;
`
const CreateButton = styled.button`
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	background-color: teal;
	color:white;
	border-radius: 10px;
`
const MainSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin:1rem 0;
	min-height:80vh;
	`
const Left = styled.div`
	flex:1;
	margin-right: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	`
const LeftTop = styled.div`
	display: flex;
	`
const ImageContainer = styled.div`
	height:50px;
	width:50px;
	margin-right: 1rem;
	`
const Image = styled.img`
	height:100%;
	width:100%;
	/* object-fit:cover; */
	border-radius: 50%;
	`
const Person = styled.div``
const Name = styled.div`
	font-size: 1.3rem;
	font-weight:600;
`
const Position = styled.div`
	color:gray;
`
const LeftBottom = styled.div`
	display: flex;
	flex-direction: column;
	margin:1rem 0;
`
const DetailItem = styled.div`
	margin-top:1rem;
`
const DetailItemTitle = styled.div`
	font-size: 1.1rem;
	color: gray;
`
const DetailItemText = styled.div`
	margin-left: 15px;
	margin-top:20px;
	font-size: 1.1rem;

  	display: flex;
	align-items: center;
`


const Right = styled.div`
	flex:2;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const RightTop = styled.div`
	width:100%;
	font-size: 1.5rem;
	font-weight: 600;
`
const RightBottom = styled.div`
	display: flex;
`
const Form = styled.form`
	flex:2;
	margin:1.5rem 0;
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top:10px;
`
const Label = styled.label`
	font-size: 1.1rem;
`
const Input = styled.input`
	border:none;
	border-bottom: 2px solid gray;
	outline:none;
	width:70%;
	margin-top:10px;
	font-size: 1.03rem;
	color:gray;
`

const DisplayContainer = styled.div`
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const Display = styled.div``
const DisplayImageContainer = styled.div`
	width:90%;
	height:70%;
`
const DisplayImage = styled.img`
	width:100%;
	height:100%;
	border-radius: 10px;
	/* object-fit: cover; */
`
const UpdateButton = styled.button`
	cursor: pointer;
	font-size: 1rem;
	font-weight:600;
	background: darkblue;
	color:white;
`

const User = () => {

	const params = useParams();
	const userId = params.id;
	const [input, setInput] = useState({});
	const [file, setFile] = useState("");
	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await userRequest.get("/user/find/" + userId);
				setUser(res.data);
				setInput(res.data);
				setFile(res.data.img);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchUser();
	}, [userId])

	const handleChange = (e) => {
		setInput(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}
	const handleSubmit = async () => {
		try {
			if (file) {

				const fileName = Date.now() + file.name;
				const imgRef = ref(storage, `/users/${user._id}/${fileName}`);
				const uploadTask = uploadBytesResumable(imgRef, file);
				uploadTask.on('state_changed',
					(snapshot) => { },
					(error) => { console.log(error.message); },
					async () => {
						getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
							const updatedUser = {
								...input,
								img: downloadURL
							}
							await userRequest.put("/user/" + user._id, updatedUser);
							setUser(updatedUser);
						});
					}
				);
			}
			else {
				const updatedUser = {
					...input
				}
				await userRequest.put("/user/" + user._id, updatedUser);
				setUser(updatedUser);
			}

		} catch (error) {
			console.log(error.message);
		}
	}
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	}
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper> 
			<Top>
				<TopTitle>Edit User</TopTitle>
			</Top>
			<MainSection>
				<Left>
					<LeftTop>
						<ImageContainer>
							<Image src={user.img} />
						</ImageContainer>
						<Person>
							<Name>{user.name}</Name>
							<Position>{user.email}</Position>
						</Person>
					</LeftTop>
					<LeftBottom>
						<DetailItem>
							<DetailItemTitle>Account Detail</DetailItemTitle>
							<DetailItemText>{user.username}</DetailItemText>
							<DetailItemText>{user.createdAt}</DetailItemText>
						</DetailItem>
						<DetailItem>
							<DetailItemTitle>Contact Detail</DetailItemTitle>
							<DetailItemText>{user.email}</DetailItemText>
							<DetailItemText>{user.mobile}</DetailItemText>
							<DetailItemText>{user.from}</DetailItemText>
						</DetailItem>
					</LeftBottom>
				</Left>
				<Right>
					<RightTop>Edit</RightTop>
					<RightBottom>
						<Form onChange={(e) => handleChange(e)}>
							<InputContainer>
								<Label>Username</Label>
								<Input defaultValue={user.username} name="username" />
							</InputContainer>
							<InputContainer>
								<Label>Full Name</Label>
								<Input defaultValue={user.name} name="name" />
							</InputContainer>
							<InputContainer>
								<Label>Email</Label>
								<Input defaultValue={user.email} name="email" />
							</InputContainer>
							<InputContainer>
								<Label>Phone</Label>
								<Input defaultValue={user.mobile} name="mobile" />
							</InputContainer>
							<InputContainer>
								<Label>Address</Label>
								<Input defaultValue={user.from} name="from" />
							</InputContainer>
						</Form>
						<DisplayContainer>
							<Display>
								<DisplayImageContainer>
									<DisplayImage src={user.img} />
									<label htmlFor="img">
										{/* <Upload style={{ cursor: "pointer", fontSize: "1.8rem" }} /> */}
										<input  type="file" name="img" id="img" onChange={handleFileChange} />
										{file?.name}
									</label>
								</DisplayImageContainer>
							</Display>
							<UpdateButton onClick={handleSubmit} >Update</UpdateButton>
						</DisplayContainer>
					</RightBottom>
				</Right>

			</MainSection>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default User
