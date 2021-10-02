import React from 'react'
import styled from'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'


const Container=styled.div``
const Title=styled.div``
const FilterContainer=styled.div``
const Filter=styled.div``

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>	
				<Filter>Filter1</Filter>
				<Filter>Filter2</Filter>
			</FilterContainer>


			{/* <Footer /> */}
		</Container>
	)
}

export default ProductList
