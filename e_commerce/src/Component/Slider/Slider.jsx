import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components'

const Container = styled.div`
	position:relative;
	overflow:hidden;
	`
const Wrapper = styled.div`
	display: flex;
	transition:all 1.5s ease;
	transform: translateX(${(props) => props.sliderIndex * -100}vw);
`
const Slide = styled.div`
	min-width: 100vw;
	width:100vw;
	height: calc(100vh - 120px) ;
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: khaki;
	`
const ImageContainer = styled.div`
	flex:1;
	position:relative;
`
const Image = styled.img`
	height:100%;
	width:100%;
	position:relative;
	z-index:999;
`
const InfoContainer = styled.div`
	flex:1;
	display: flex;
	flex-direction:column;
	justify-content: center;
`
const Title = styled.h1`
	font-size:100px;
	margin-bottom:40px;
`
const Desc = styled.div`
	font-size:26px;
	margin-bottom: 40px;
`
const Button = styled.button`
	width:155px;
	display: flex;
	align-content: center;
	background: transparent;
	padding:10px 15px;
	font-size: 18px;
	font-weight:600;
	cursor: pointer;
	&:hover{
		background: white;
		color:black;
	}
`

const Arrow = styled.div`
	height:30px;
	width:30px;
	background: white;
	border-radius:50%;

	display: flex;
	align-items: center;
	&:hover{
		background: #c0c0c0;
	}
	cursor: pointer;

	position:absolute;
	top:0;
	bottom:0;
	margin:auto;
	left: ${(props) => props.dir=== "left" && "10px"};
  	right: ${(props) => props.dir  === "right" && "10px"};
	z-index:1000;

`
const Circle = styled.div`
	height:400px;
	width:400px;
	border-radius:50%;
	background:green;
	position:absolute;
	top:0;
	bottom:0;
	margin:auto;
	z-index:0;
`

const Slider = () => {
	const [sliderIndex,setSliderIndex]=useState(0);
	const handleClick=(dir)=>{
		if(dir==="right") {setSliderIndex((sliderIndex+1) % 3);  console.log(sliderIndex);}
		else if(dir==="left") {sliderIndex===0 ? setSliderIndex(2):setSliderIndex((sliderIndex-1) % 3); console.log(sliderIndex); }
	}


	return (
		<Container>
			<Arrow dir="left" onClick={()=>handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper sliderIndex={sliderIndex}>
				<Slide>
					<ImageContainer>
						<Circle />
						<Image src="https://i.ibb.co/DG69bQ4/2.png" alt="image" />
					</ImageContainer>
					<InfoContainer >
						<Title>Summer Collection</Title>
						<Desc>mohit</Desc>
						<Button>
							<div>SHOP NOW</div>
							<ArrowRightOutlined />
						</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImageContainer>
						<Circle />
						<Image src="https://i.ibb.co/DG69bQ4/2.png" alt="image" />
					</ImageContainer>
					<InfoContainer >
						<Title>Summer Collection</Title>
						<Desc>asdfasdf</Desc>
						<Button>
							<div>SHOP NOW</div>
							<ArrowRightOutlined />
						</Button>
					</InfoContainer>
				</Slide>
				<Slide>
					<ImageContainer>
						<Circle />
						<Image src="https://i.ibb.co/DG69bQ4/2.png" alt="image" />
					</ImageContainer>
					<InfoContainer >
						<Title>Summer Collection</Title>
						<Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, mollitia.</Desc>
						<Button>
							<div>SHOP NOW</div>
							<ArrowRightOutlined />
						</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>

			<Arrow dir="right" onClick={()=>handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	)
}

export default Slider
