import React from 'react'
import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
  } from "@material-ui/icons";
import styled from 'styled-components'

const Container=styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`
const Left=styled.div`
	flex:1;	
	margin:10px 15px;
	`
const Center=styled.div`
	flex:1;	
	margin:10px 15px;
	`
const Right=styled.div`
	flex:1;	
	margin:10px 15px;
`
const Logo=styled.div`
	font-size: 30px;
	font-weight: 600;
	margin-bottom:10px;
	color:brown;
	`
const Desc=styled.div`
	font-size: 20px;
	font-weight: 300;

`
const SocialContainer=styled.div`
	display:flex;
	align-items: center;
	margin-top:20px;
`
const SocialIcon=styled.div`
	margin-right:10px;
	cursor: pointer;
`
const Title=styled.div`
	font-size: 25px;
	font-weight: 600;
	margin-bottom:10px;
	color:brown;
	`
const List=styled.div`
	display: flex;
	flex-wrap: wrap;
	font-size: 18px;
`
const ListItem=styled.div`
	width:50%;
	margin-bottom: 5px;
	cursor: pointer;
`
const ContactItem=styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`


const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>My Shop</Logo>
				<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique excepturi iste ducimus error non facere esse reiciendis impedit voluptas totam, odio dolorem dicta ut consectetur quia, inventore accusamus maiores.</Desc>
				<SocialContainer>
					<SocialIcon><Facebook style={{fontSize:30}}/></SocialIcon>
					<SocialIcon><Instagram style={{fontSize:30}}/></SocialIcon>
					<SocialIcon><Twitter style={{fontSize:30}}/></SocialIcon>
					<SocialIcon><Pinterest style={{fontSize:30}}/></SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Contact</Title>
				<ContactItem> <Room /> 504-A ShreeNath Puram Kota Rajasthan 324010 </ContactItem>
				<ContactItem> <Phone/>+91-8505018619 </ContactItem>
				<ContactItem> <MailOutline /> 2019285@iiitdmj.ac.in </ContactItem>
			</Center>
			<Right>
				<Title>Usefull Links</Title>
				<List>
					<ListItem>My Account</ListItem>
					<ListItem>Sign Up</ListItem>
					<ListItem>Sign In</ListItem>
					<ListItem>Product-List</ListItem>
				</List>

			</Right>
		</Container>
	)
}

export default Footer
