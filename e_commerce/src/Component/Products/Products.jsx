import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import {Link } from 'react-router-dom'	
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from 'styled-components'

const Container = styled.div``
const Heading = styled.div`
	text-align:center;
	font-size:35px;
	font-weight: 600;
	color:#fca103 ;
	/* background-color: #fca103; */
`
const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	`
const IconContainer = styled.div`
	position:absolute;
	top:0;
	height:100%;
	width:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	background: #afebf461;
	z-index:1000;
`
const Item = styled.div`
	flex:1;
	max-width: 500px;
	width:100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin:10px 20px;
	position:relative;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover ${IconContainer}{
		opacity:1;
	}
`
const ImageContainer = styled.div`
	height:400px;
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position:relative;
`
const Image = styled.img`
	height:80%;
	position:relative;
	z-index:999;
`
const Icon = styled.div`
	margin-left:10px;
	cursor:pointer;
	&:hover{
		transform:scale(1.5);
	}
`
const Circle = styled.div`
	height: 85%;
	width: 85%;
	border-radius:50%;
	background-color:#fca103;
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	margin:auto;
	z-index:0;
`

const Products = ({sort, filter, category}) => {
	const history = useHistory();
	const [allProduct, setAllProduct] = useState([]);
	const [filterProduct , setFilterProduct] =useState([]);

	useEffect(()=>{
		const fetchProduct=async()=>{
			try {
				const res= category ?  await axios.get("/product?category="+category) :await axios.get("/product/");
				setAllProduct(res.data);
				setFilterProduct(res.data);
			}
			catch (error) {
				console.log(error)
				history.push("/error");
			}
		}
		fetchProduct();
	},[category])

	useEffect(()=>{
		filter && setFilterProduct( 
			allProduct.filter((product) => Object.entries(filter).every( ([key,value]) => value==="choose"||product[key].map(a=>a.toLowerCase()).includes(value)  ))
		)
		console.log(filter)
	},[allProduct, category, filter])

	useEffect(() => {
		if (sort === "newest" || sort==="Choose") {
		  setFilterProduct((prev) =>
			[...prev].sort((a, b) => a.createdAt - b.createdAt)
		  );
		} else if (sort === "Price(asc.)") {
		  setFilterProduct((prev) =>
			[...prev].sort((a, b) => a.price - b.price)
		  );
		} else {
		  setFilterProduct((prev) =>
			[...prev].sort((a, b) => b.price - a.price)
		  );
		}
	  }, [sort]);

	return (
		<Container>
			<Heading>{category}</Heading>
			<Wrapper>

				{ filterProduct.map((item) => {
					return (
						<Item key={item._id}>
							<ImageContainer>
								<Circle />
								<Image src={item.img} />
							</ImageContainer>
							<IconContainer>
								<Icon> <FavoriteBorderOutlined style={{ fontSize: 30 }} /></Icon>
								<Icon> <Link className='text-link' to={`/product/${item._id}`}><SearchOutlined style={{ fontSize: 30 }} /></Link></Icon>
								<Icon> <ShoppingCartOutlined style={{ fontSize: 30 }} /></Icon>
							</IconContainer>
							{item.price}
						</Item>
					)
				})}
			</Wrapper>
		</Container>
	)
}

export default Products
