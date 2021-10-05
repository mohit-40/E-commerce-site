import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {
	PermIdentity,
	CalendarToday,
	MailOutline,
	PhoneAndroid,
	LocationSearching,
	Publish,
	Upload,
  } from '@mui/icons-material'
const Container=styled.div`
	margin: 1rem;
`
const Top=styled.div`
	display: flex;
	justify-content: space-between;
`
const TopTitle=styled.div`
	font-size: 2rem;
	font-weight: 700;
`
const CreateButton=styled.button`
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	background-color: teal;
	color:white;
	border-radius: 10px;
`
const MainSection=styled.div`
	display: flex;
	flex-wrap: wrap;
	margin:1rem 0;
	`
const Left=styled.div`
	flex:1;
	margin-right: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	`
const LeftTop=styled.div`
	display: flex;
	`
const ImageContainer=styled.div`
	height:50px;
	width:50px;
	margin-right: 1rem;
	`
const Image=styled.img`
	height:100%;
	width:100%;
	/* object-fit:cover; */
	border-radius: 50%;
	`
const Person=styled.div``
const Name=styled.div`
	font-size: 1.3rem;
	font-weight:600;
`
const Position=styled.div`
	color:gray;
`
const LeftBottom=styled.div`
	display: flex;
	flex-direction: column;
	margin:1rem 0;
`
const DetailItem=styled.div`
	margin-top:1rem;
`
const DetailItemTitle=styled.div`
	font-size: 1.1rem;
	color: gray;
`
const DetailItemText=styled.div`
	margin-left: 15px;
	margin-top:20px;
	font-size: 1.1rem;

  	display: flex;
	align-items: center;
`


const Right=styled.div`
	flex:2;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const RightTop=styled.div`
	width:100%;
	font-size: 1.5rem;
	font-weight: 600;
`
const RightBottom=styled.div`
	display: flex;
`
const Form=styled.form`
	flex:2;
	margin:1.5rem 0;
`
const InputContainer=styled.div`
	display: flex;
	flex-direction: column;
	margin-top:10px;
`
const Label=styled.label`
	font-size: 1.1rem;
`
const Input=styled.input`
	border:none;
	border-bottom: 2px solid gray;
	outline:none;
	width:70%;
	margin-top:10px;
	font-size: 1.03rem;
	color:gray;
`

const DisplayContainer=styled.div`
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`
const Display=styled.div``
const DisplayImageContainer=styled.div`
	width:90%;
	height:70%;
`
const DisplayImage=styled.img`
	width:100%;
	height:100%;
	border-radius: 10px;
	/* object-fit: cover; */
`
const UpdateButton=styled.button`
	cursor: pointer;
	font-size: 1rem;
	font-weight:600;
	background: darkblue;
	color:white;
`

const User = () => {
	return (
		<Container>
			<Top>
				<TopTitle>Edit User</TopTitle>
				<Link to="/createUser" ><CreateButton>Create</CreateButton></Link>
			</Top>
			<MainSection>
				<Left>
					<LeftTop>
						<ImageContainer>
							<Image src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
						</ImageContainer>
						<Person>
							<Name>Anna Becker</Name>
							<Position>Software Engineer</Position>
						</Person>
					</LeftTop>
					<LeftBottom>
						<DetailItem>
							<DetailItemTitle>Account Detail</DetailItemTitle>
							<DetailItemText><PermIdentity style={{fontSize:"1.4rem", marginRight:"10px"}}/>lorem5648</DetailItemText>
							<DetailItemText><CalendarToday style={{fontSize:"1.4rem", marginRight:"10px"}}/>10.12.1994</DetailItemText>
						</DetailItem>
						<DetailItem>
							<DetailItemTitle>Contact Detail</DetailItemTitle>
							<DetailItemText><MailOutline style={{fontSize:"1.4rem", marginRight:"10px"}}/>@gmail.com</DetailItemText>
							<DetailItemText><PhoneAndroid style={{fontSize:"1.4rem", marginRight:"10px"}}/>+1 54826492</DetailItemText>
							<DetailItemText><LocationSearching style={{fontSize:"1.4rem", marginRight:"10px"}}/>New York City</DetailItemText>
						</DetailItem>
					</LeftBottom>
				</Left>
				<Right>
					<RightTop>Edit</RightTop>
					<RightBottom>
						<Form>
							<InputContainer>
								<Label>Username</Label>
								<Input value="lorem4561"/>
							</InputContainer>
							<InputContainer>
								<Label>Full Name</Label>
								<Input defaultValue="Anna Becker"/>
							</InputContainer>
							<InputContainer>
								<Label>Email</Label>
								<Input defaultValue="@gmail.com"/>
							</InputContainer>
							<InputContainer>
								<Label>Phone</Label>
								<Input defaultValue="+91 654650681"/>
							</InputContainer>
							<InputContainer>
								<Label>Address</Label>
								<Input defaultValue="New York City "/>
							</InputContainer>
						</Form>
							<DisplayContainer>
							<Display>
								<DisplayImageContainer>
									<DisplayImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
										<Upload style={{cursor:"pointer",fontSize:"1.8rem"}}/>
								</DisplayImageContainer>
							</Display>
							<UpdateButton>Update</UpdateButton>
							</DisplayContainer>
					</RightBottom>
				</Right>
			</MainSection>
		</Container>
	)
}

export default User
