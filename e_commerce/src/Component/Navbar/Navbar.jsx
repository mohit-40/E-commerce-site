import React from 'react'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from 'styled-components'

const Container=styled.div``
const Wrapper=styled.div``
const Language=styled.div``
const SearchBar=styled.div``
const Left=styled.div``
const Center=styled.div``
const Right=styled.div``
const RightItem=styled.div``

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchBar>
						<input type="text" />
						<Search/>
					</SearchBar>
				</Left>
				<Center>LAMA DEV</Center>
				<Right>
					<RightItem>SignUp</RightItem>
					<RightItem>SignIN</RightItem>
					<RightItem> <ShoppingCartOutlined /> </RightItem>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Navbar
