import React, { useState } from 'react'
import {Link, useHistory } from 'react-router-dom'
import { Badge } from "@material-ui/core";
import { Menu,Close, Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from 'styled-components'
import { mobile } from "../../responsive";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/exportAllAction';

const Container = styled.div`
	height:60px;
	height: fit-content;
	position:sticky;
	top:0;
	z-index:10000;
	background:white;
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
const ButtonLogout =styled.button`
	background-color: red;
	color:white;
	border-radius: 10px;
	padding: 8px 8px;
	border:none;
	font-size:18px;
	cursor: pointer;
	font-weight: 500;
	&:hover{
		background: #b80202;
	}
`



const Navbar = () => {
	const history = useHistory();
	const cartItems = useSelector(state=> state.cart.cartItems)
	const [click, setClick] = useState(false);
	const handleClick=()=> setClick(!click);
	// const closeMobileMenu = () => setClick(false);
	const currentUserId=useSelector(state=>state.user.currentUserId)
	const dispatch= useDispatch()

	const handleLogout = ()=>{
		dispatch(logout(currentUserId))
	}	
	const [search,setSearch] = useState("")
	const handleSearch=()=>{
		history.push("/product-list/"+search);
	}

	return (
		<Container>
			<Wrapper>
				<Left>
					{click? <Close onClick={handleClick} className="hamburger close"/> : <Menu onClick={handleClick} className="hamburger"/>}
					<Language>EN</Language>
					<SearchContainer>
						<input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search Catergory here'/>
						<Search onClick={handleSearch} style={{cursor:"pointer"}}/>
						
					</SearchContainer>
				</Left>
				<Center><Link className='text-link' to="/"><Logo>My Shop</Logo> </Link></Center>
				<Right click={click} className={click? "active" : ""}>
					{
						currentUserId ?
						<>
							<RightItem><ButtonLogout onClick={handleLogout}>Logout</ButtonLogout></RightItem>
							<RightItem><Link className='text-link' to={`/profile/${currentUserId}`}>Profile</Link></RightItem>
							<RightItem><Link className='text-link' to={`/orders/${currentUserId}`}>Orders</Link></RightItem>
						</>
					:
						<>
						<RightItem><Link className='text-link' to="/register">REGISTER</Link></RightItem>
						<RightItem><Link className='text-link' to="/login">SIGN IN</Link></RightItem>
						</>
					}

					<RightItem> 
						<Badge badgeContent={cartItems.length} color="primary" >
							<Link className='text-link' to="/cart"><ShoppingCartOutlined style={{fontSize: 30 }}/></Link>
						</Badge>
					</RightItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
