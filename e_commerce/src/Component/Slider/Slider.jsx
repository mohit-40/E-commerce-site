import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components'
import { sliderItems } from '../../data'
import { mobile } from "../../responsive";

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
	min-height:500px;
	min-width: 100vw;
	width:100vw;
	height: calc(100vh - 120px) ;
	display: flex;
	align-content: center;
	justify-content: center;
	background-color: ${(props) => props.bg};;
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
	font-size:4rem;
	margin-bottom:40px;
	${mobile({ fontSize:"1.5rem" })}
	`
const Desc = styled.div`
	font-size:1.5rem;
	margin-bottom: 40px;
	${mobile({ fontSize:"1rem" })}
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
		background: #c0c0c0;
		color:black;
	}
	${mobile({ fontSize:"0.9rem" })}
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
	left: ${(props) => props.dir === "left" && "10px"};
  	right: ${(props) => props.dir === "right" && "10px"};
	z-index:1000;

`
const Circle = styled.div`
	height:50%;
	width:50%;
	border-radius:50%;
	background:green;
	position:absolute;
	top:0;
	bottom:0;
	margin:auto;
	z-index:0;
	${mobile({ display:"none", })}
`

const Slider = () => {
	const [sliderIndex, setSliderIndex] = useState(0);
	const handleClick = (dir) => {
		if (dir === "right") { setSliderIndex((sliderIndex + 1) % 3); console.log(sliderIndex); }
		else if (dir === "left") { sliderIndex === 0 ? setSliderIndex(2) : setSliderIndex((sliderIndex - 1) % 3); console.log(sliderIndex); }
	}


	return (
		<Container>
			<Arrow dir="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper sliderIndex={sliderIndex}>
				{sliderItems.map((item) => {
					return (
						<Slide key={item.id} bg={item.bg}>
							<ImageContainer>
								<Circle />
								<Image src={item.img} alt="image" />
							</ImageContainer>
							<InfoContainer >
								<Title>{item.title}</Title>
								<Desc>{item.desc}</Desc>
								<Button>
									<Link to="/product-list" className="text-link"><div>SHOP NOW</div> </Link>
									<ArrowRightOutlined />
								</Button>
							</InfoContainer>
						</Slide>
					);
				})}
			</Wrapper>

			<Arrow dir="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	)
}

export default Slider
