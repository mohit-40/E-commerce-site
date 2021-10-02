import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from 'styled-components'

const Container = styled.div`
	height:60px;
`
const Wrapper = styled.div`
	display: flex;
	padding: 10px 15px;
	justify-content: center;
	align-content: center;
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
	`
const Left = styled.div`
	flex:1;
	display: flex;
	align-items: center;
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
	`
const RightItem = styled.div`
	font-weight:600;
	font-size:20px;
	margin-left:20px;
	cursor: pointer;
	`

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<input type="text" />
						<Search />
					</SearchContainer>
				</Left>
				<Center><Logo>LAMA DEV</Logo></Center>
				<Right>
					<RightItem>REGISTER</RightItem>
					<RightItem>SIGN IN</RightItem>
					<RightItem> 
						<Badge badgeContent={4} color="primary" >
							<ShoppingCartOutlined style={{fontSize: 30 }}/>
						</Badge>
					</RightItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
