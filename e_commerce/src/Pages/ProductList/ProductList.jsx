import React from 'react'
import styled from'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import Products from '../../Component/Products/Products'


const Container=styled.div``
const Title=styled.div`
	text-align:center;
	font-size:3rem;
	font-weight: 600;
	color:#fca103 ;
	margin-top: 10px;
`
const FilterContainer=styled.div`
	display:flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	max-width: 1400px;
	margin: auto;
`
const Filter=styled.div`
	font-size: 1.6rem;
	font-weight: 500;
`
const Select=styled.select`
	padding:10px 10px;
	font-size: 18px;
	margin-left: 15px;
`
const Option=styled.option``



const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>	
				<Filter>
					Filter Product : 
					<Select>
						<Option selected>Choose</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Green</Option>
						<Option>White</Option>
						<Option>Orange</Option>
					</Select>
					<Select>
						<Option selected>Choose</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					Sort Product : 
					<Select>
						<Option selected>Choose</Option>
						<Option>Price(asc.)</Option>
						<Option>Price(desc.)</Option>
						<Option>Popularity</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products title=""/>
			<NewsLetter/>
			<Footer />
		</Container>
	)
}

export default ProductList
