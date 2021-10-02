import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``
const Wrappaer = styled.div`
	display: flex;
	justify-content: center;
`
const ImageContainer = styled.div`
	flex:1;
	margin: 20px 20px;
	`
const Image = styled.img`
	height: 80vh;
	width: 80%
	`
const InfoContainer = styled.div`
	flex:1;
	margin: 20px 20px;
`
const Title = styled.div`
	font-size: 3rem;
	font-weight: 600;
	margin: 0px 0px 20px 0;
`
const Desc = styled.div`
	font-size: 1.3rem;
`
const Price = styled.div`
	margin:20px 0;
	font-size: 2.5rem;
`
const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width:50%;
`

const Filter = styled.div`
	display: flex;
	margin:10px 0;
`
const FilterTitle = styled.span`
	font-size: 1.5rem;
	margin-right: 10px;
`


const FilterSelect = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
const ColorOption = styled.div`
	height:20px;
	width:20px;
	border-radius:50px;
	border:2px solid gray;
	background: ${(props) => props.color};
	margin:2px;
	cursor: pointer;	
	`
const Select = styled.select`
	font-size: 1rem;
	`
const Option = styled.option``


const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content:space-between;
	width:50%;
	margin:20px 0;
	`
const CountContainer = styled.div`
	display: flex;
	align-items: center;
	`
const Count = styled.input`
	font-size: 20px;
	border: 2px solid blue;
	width:40px;
	border-radius: 10px;
	outline:none;
	display: flex;
	justify-content: center;
	align-items: center;
	`
const Button = styled.button`
	cursor: pointer;	
	background:transparent;
	border: 2px solid blue;
	border-radius: 10px;
	padding: 10px;
	font-size: 16px;
`

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrappaer>
				<ImageContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImageContainer>
				<InfoContainer>
					<Title>Jumpsuit</Title>
					<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque enim omnis accusantium maxime culpa, hic ad repellat fugit veniam similique et cupiditate quasi dolor. Modi, id dolore. Cupiditate, vel quisquam!</Desc>
					<Price>Rs 500</Price>

					<FilterContainer>
						<Filter>
							<FilterTitle> Color:</FilterTitle>
							<FilterSelect>
								<ColorOption color="black" />
								<ColorOption color="gray" />
								<ColorOption color="blue" />
							</FilterSelect>
						</Filter>
						<Filter>
							<FilterTitle> Size:</FilterTitle>
							<Select>
								<Option Selected>Choose</Option>
								<Option Selected>XS</Option>
								<Option Selected>S</Option>
								<Option Selected>M</Option>
								<Option Selected>L</Option>
								<Option Selected>XL</Option>
							</Select>
						</Filter>
					</FilterContainer>

					<AddContainer>
						<CountContainer>
							<Remove />
							<Count defaultValue={1}/>
							<Add />
						</CountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>

				</InfoContainer>
			</Wrappaer>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Product
