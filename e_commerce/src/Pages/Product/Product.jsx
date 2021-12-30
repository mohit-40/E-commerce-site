import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../../redux/exportAllAction"

import { Add, Remove } from '@material-ui/icons'
import Navbar from '../../Component/Navbar/Navbar'
import Announcement from '../../Component/Announcement/Announcement'
import Footer from '../../Component/Footer/Footer'
import NewsLetter from '../../Component/NewsLetter/NewsLetter'
import { userRequest } from '../../requestMethod'


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
const Count = styled.div`
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
	&:hover{
		background:blue;
	}
`

const Product = () => {
	const history = useHistory()
	const param = useParams();
	const productId = param.productId;
	const [product, setProduct] = useState([]);

	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");
	
	const handleSize = (e) => { setSize(e.target.value) }
	const handleColor = (col) => { setColor(col); }
	const handleQuantity = (parameter) => { parameter === "increment" ? setQuantity((prev) => prev + 1) : quantity > 1 && setQuantity((prev) => prev - 1); }
	
	const dispatch = useDispatch();
	const currentUserId = useSelector(state => state.user.currentUserId);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await axios.get("/product/" + productId);
				setProduct(res.data);
			}
			catch (err) {
				history.push("/error")
			}
		}
		fetchProduct();
	}, [productId ,history])

	const handleAddToCart = async () => {
		try {
			const item = {
				cartItemId:null,
				userId: currentUserId,
				productId: product._id,
				quantity: quantity,
				color: color,
				size: size,
				date:new Date().getTime()
			}
			if(currentUserId){
				const res = await userRequest.post("/cart", item);
				dispatch(addItem(res.data))
			} 
			else{ 
				dispatch(addItem(item))
			}
		} catch (error) {
			console.log(error)
		}
	}  

	const handleAddToWishList=async()=>{
		try {
			await userRequest.post(`/wishList/${currentUserId}`,{userId : currentUserId , productId:product._id})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrappaer>
				<ImageContainer>
					<Image src={product.img} />
				</ImageContainer>
				<InfoContainer>
					<Title>{product.name}</Title>
					<Desc>{product.desc}</Desc>
					<Price>Rs {product.price}</Price>

					<FilterContainer>
						<Filter>
							<FilterTitle> Color:</FilterTitle>
							<FilterSelect>
								{product.color && product.color.map((col) => <ColorOption color={col} key={col} style={color === col ? { border: "5px solid gray" } : {}} onClick={() => handleColor(col)} />)}
							</FilterSelect>
						</Filter>
						<Filter>
							<FilterTitle> Size:</FilterTitle>
							<Select onChange={handleSize} required>
								<Option Selected>Choose</Option>
								{product.size && product.size.map((sz) => <Option key={sz} >{sz}</Option>)}
							</Select>
						</Filter>
					</FilterContainer>

					<AddContainer>
						<CountContainer>
							<Remove onClick={() => handleQuantity("decrement")} />
							<Count >{quantity}</Count>
							<Add onClick={() => handleQuantity("increment")} />
						</CountContainer>
						<Button onClick={handleAddToCart}>ADD TO CART</Button>
						<Button onClick={handleAddToWishList}>ADD TO WishList</Button>
					</AddContainer>

				</InfoContainer>
			</Wrappaer>
			<NewsLetter />
			<Footer />
		</Container>
	)
}

export default Product
