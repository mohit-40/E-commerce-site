import { Visibility } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { userRequest } from '../../requestMethod'
const Container=styled.div`
	flex:1;
	margin: 1rem;
	padding:1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const Title=styled.div`
	font-size: 1.5rem;
	font-weight:700;
`
const MemberContainer=styled.div`
	margin:10px 0;
`
const Member=styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin:1rem;
`
const ImageContainer=styled.div`
	width:40px;
	height:40px;
`
const Image=styled.img`
	height:100%;
	width:100%;
	border-radius: 50%;
	object-fit: cover;
`
const Detail=styled.div`
	display:flex;
	align-item:center;
	
	`
const Info=styled.div`
	display: flex;
	flex-direction:column;
	margin-left:10px;
`
const Name=styled.div`
	font-size: 1rem;
	font-weight:600;
`
const Position=styled.div`
	color: gray;
`
const Button=styled.button`
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	background: #99bbff;
	border-radius: 10px;
	border: none;
	height: 30px;
	cursor: pointer;
`

const HomeWigetSm = () => {
	const history =useHistory();
	const [userList ,setUserList ] =useState([]);
	useEffect(()=>{
	  const fetchUserList= async()=>{
		  try {
			  const res = await userRequest.get("/user/allusers");
			  setUserList(res.data); 
		  } catch (error) {
			  console.log(error);
		  }
	  }
	  fetchUserList(); 
	},[])
	return (
		<Container>
			<Title>New Join Member</Title>
			<MemberContainer>
				{
					userList?.slice(0,5)?.map((u)=>
						<Member key={u._id}>
							<Detail>
								<ImageContainer> <Image src="https://source.unsplash.com/random" ></Image> </ImageContainer>
								<Info>
									<Name>{u.username}</Name>
									<Position>{u.email}</Position>
								</Info>
							</Detail>
							<Button onClick={()=> { history.push("/user/"+u._id)}}> <Visibility style={{fontSize:"1rem" ,marginRight:"5px"}} />Display </Button>
						</Member>
					
					)
				}

			</MemberContainer>
		</Container>
	)
}

export default HomeWigetSm
