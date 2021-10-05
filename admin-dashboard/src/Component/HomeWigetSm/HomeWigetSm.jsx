import { Visibility } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
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
const Detail=styled.div``
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
	return (
		<Container>
			<Title>New Join Member</Title>
			<MemberContainer>
				<Member>
					<ImageContainer> <Image src="https://source.unsplash.com/random" ></Image> </ImageContainer>
					<Detail>
						<Name>lorem alki</Name>
						<Position>Software Developer</Position>
					</Detail>
					<Button> <Visibility style={{fontSize:"1rem" ,marginRight:"5px"}}/>Display </Button>
				</Member>
				<Member>
					<ImageContainer> <Image src="https://source.unsplash.com/random" ></Image> </ImageContainer>
					<Detail>
						<Name>lorem alki</Name>
						<Position>Software Developer</Position>
					</Detail>
					<Button> <Visibility style={{fontSize:"1rem" ,marginRight:"5px"}}/>Display </Button>
				</Member>
				<Member>
					<ImageContainer> <Image src="https://source.unsplash.com/random" ></Image> </ImageContainer>
					<Detail>
						<Name>lorem alki</Name>
						<Position>Software Developer</Position>
					</Detail>
					<Button> <Visibility style={{fontSize:"1rem" ,marginRight:"5px"}}/>Display </Button>
				</Member>

			</MemberContainer>
		</Container>
	)
}

export default HomeWigetSm
