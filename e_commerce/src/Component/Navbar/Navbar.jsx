import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { Badge } from "@material-ui/core";
import { Menu,Close, Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from 'styled-components'
import { mobile } from "../../responsive";
import { useSelector } from 'react-redux';

const Container = styled.div`
	height:60px;
	height: fit-content;
`
const Wrapper = styled.div`
	display: flex;
	padding: 10px 15px;
	justify-content: center;
	align-content: center;
	position: relative;
	`
const Language = styled.div`
	font-weight:600;
	font-size:20px;
	cursor: pointer;
	`
const Logo = styled.div`
	font-size:30px;
	font-weight:700;
	cursor: pointer;
	`
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	border:2px solid gray;
	margin-left:10px;
	input{
		outline:none;
		border:none;
	}
	${mobile({ display:"none", })}
	`
const Left = styled.div`
	flex:1;
	display: flex;
	align-items: center;
	.close{
		color:white;
		font-size:2rem;
		position: relative;
		z-index:1002;
	}
	.hamburger{
		display: none;
		${mobile({display:"inline",})}
	}
	`
const Center = styled.div`
	flex:1;
	display: flex;
	justify-content: center;
	`
const Right = styled.div`
	flex:1;
	display: flex;
	align-items: center;
	justify-content:flex-end;
	${mobile({ 
		display:(props)=> props.click? "flex" : "none", 
		width:"100%", 
		height:"50vh",
		flexDirection: "column",
		justifyContent: "space-evenly",
		background:"#000",
		color:"white",
		position:"absolute",
		top:"0",
		zIndex:"1001",
	})}
	`
const RightItem = styled.div`
	font-weight:600;
	font-size:20px;
	margin-left:20px;
	cursor: pointer;
	`


const Navbar = () => {
	const cartState = useSelector(state=> state.cart)
	const [click, setClick] = useState(false);
	const handleClick=()=> setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<Container>
			<Wrapper>
				<Left>
					{click? <Close onClick={handleClick} className="hamburger close"/> : <Menu onClick={handleClick} className="hamburger"/>}
					<Language>EN</Language>
					<SearchContainer>
						<input type="text" />
						<Search />
					</SearchContainer>
				</Left>
				<Center><Link className='text-link' to="/"><Logo>LAMA DEV</Logo> </Link></Center>
				<Right click={click} className={click? "active" : ""}>
					<RightItem><Link className='text-link' to="/register">REGISTER</Link></RightItem>
					<RightItem><Link className='text-link' to="/login">SIGN IN</Link></RightItem>
					<RightItem> 
						<Badge badgeContent={cartState.totalQuantity} color="primary" >
							<Link className='text-link' to="/cart"><ShoppingCartOutlined style={{fontSize: 30 }}/></Link>
						</Badge>
					</RightItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
