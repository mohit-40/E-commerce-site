import React, { useMemo } from 'react'
import { Link, useParams } from "react-router-dom"
import { Upload } from '@mui/icons-material'
import Chart from '../../Component/Chart/Chart'
import { productData } from "../../DummyData"
import styled from 'styled-components'
import { useEffect } from 'react'
import { userRequest } from "../../requestMethod"
import { useState } from 'react'
import { storage } from '../../firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Container = styled.div`
	margin: 1rem;
`
const HeadingSection = styled.div`
	display: flex;
	justify-content: space-between;
`
const CreateProductButton = styled.button`
	background-color: teal;
	border-radius: 10px;
	font-size: 1rem;
	color:white;
	font-weight: 600;
`
const Heading = styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const Top = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Left = styled.div`
	flex: 2;
	min-width: 300px;
`
const Right = styled.div`
	flex:1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	margin:1rem;
	padding: 1rem;
`
const RightTop = styled.div`
	display: flex;
`
const LogoImageContainer = styled.div`
	width:40px;
	height:40px;
	margin-right: 1rem;
`
const LogoImage = styled.img`
	height:100%;
	width:100%;
	border-radius:50%;
	`
const ProductName = styled.div`
	font-size: 1.4rem;
	font-weight: 600;
	color: brown;
`
const RightBottom = styled.div`
	margin:2rem 0;
`
const ProductDetail = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin:15px 0;
	font-size: 1.2rem;
	font-weight:600;
`
const Key = styled.div``
const Value = styled.div`
	color:gray;
`

const Bottom = styled.div`
	margin: 0 1rem;
	padding: 1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-wrap: wrap;
`
const Update = styled.div`
	flex:2;
	min-width:300;
`
const Form = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap; 
`
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top:1rem;
	margin-right:1rem;
`
const Label = styled.label`
	font-size:1.2rem;
	font-weight: 600;
	color:gray;
	margin-bottom:10px;
`
const Input = styled.input`
	outline:none;
	border:none;
	border-bottom:2px solid gray;
	height:20px;
	font-size:1.1rem;
	color:brown;
`
const Select = styled.select`
	font-size: 1.1rem;
`
const Option = styled.option``
const ImageSection = styled.div`
	flex:1;
`
const ProductImageContainer = styled.div`
	height:250px;
	width:250px;
	display: flex;
	align-items: center;
	`
const ProductImage = styled.img`
	height:100%;
	width:100%;
	margin-right: 20px;
`
const UpdateButton = styled.button`
	cursor: pointer;
	background-color: darkblue;
	color:white;
	padding:10px;
	margin-top:10px;
	width:60%;
`


const Product = () => {
	const params = useParams();
	const productId = params.productId;

	//fetching product
	const [product, setProduct] = useState({})
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await userRequest.get("/product/" + productId);
				setProduct(res.data);
				setInput(res.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchProduct();
	}, [productId])

	//product stats 
	const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec",], []);
	const [productStats, setProductStats] = useState({});
	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await userRequest.get("orders/income?pid=" + productId);
				const list = res.data.sort((a, b) => {
					return a._id - b._id
				})
				list.map((item) =>
					setProductStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], Sales: item.total },
					])
				);
			} catch (err) {
				console.log(err);
			}
		};
		getStats();
	}, [productId, MONTHS]);


	// handle form 
	const [file, setFile] = useState("");
	const [input, setInput] = useState({});
	const handleSubmit = async () => {
		try {
			console.log(file);
			if (file) {
				const fileName = Date.now() + file.name;
				const imgRef = ref(storage, `/products/${fileName}`);
				const uploadTask = uploadBytesResumable(imgRef, file);
				uploadTask.on('state_changed',
					(snapshot) => { },
					(error) => { console.log(error.message); },
					async () => {
						getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
							const updatedProduct = {
								...input,
								img: downloadURL
							}
							await userRequest.put("/product/" + product._id, updatedProduct);
							setProduct(updatedProduct);
						});
					}
				)
			}
			else {
				const updatedProduct = {
					...input,
					img: product.img
				}
				await userRequest.put("/product/" + product._id, updatedProduct);
				setProduct(updatedProduct);
			}
		} catch (error) {
			console.log(error.message);
		}
	}
	const handleChange = (e) => {
		setInput(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
		console.log(input);
	}

	return (
		<Container>
			<HeadingSection>
				<Heading>Product</Heading>
				<Link to="/createProduct" ><CreateProductButton>Create</CreateProductButton> </Link>
			</HeadingSection>
			<Top>
				<Left>
					<Chart title="Sales Performance" xDataKey="name" lineDataKey="Sales" data={productStats} height="300" />
				</Left>
				<Right>
					<RightTop>
						<LogoImageContainer>
							<LogoImage src={product?.img} />
						</LogoImageContainer>
						<ProductName>{product?.name}</ProductName>
					</RightTop>
					<RightBottom>
						<ProductDetail>
							<Key>id:</Key>
							<Value>{product?._id}</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>Sales:</Key>
							<Value>{product?.sale}</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>Active: </Key>
							<Value>{product?.active ? "Yes" : "No"}</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>Stock : </Key>
							<Value>{product?.stock}</Value>
						</ProductDetail>
					</RightBottom>
				</Right>
			</Top>
			<Bottom>
				<Update>
					<Form onChange={(e) => handleChange(e)}>
						<InputContainer>
							<Label>Product Name</Label>
							<Input defaultValue={product?.name} name="name" />
						</InputContainer>
						<InputContainer>
							<Label>Description</Label>
							<Input defaultValue={product?.desc} name="desc" />
						</InputContainer>
						<InputContainer>
							<Label>Category</Label>
							<Input defaultValue={product?.category} name="category" />
						</InputContainer>
						<InputContainer>
							<Label>Color</Label>
							<Input defaultValue={product?.color} name="color" />
						</InputContainer>
						<InputContainer>
							<Label>Size</Label>
							<Input defaultValue={product?.size} name="size" />
						</InputContainer>
						<InputContainer>
							<Label>Price</Label>
							<Input defaultValue={product?.price} name="price" />
						</InputContainer>
						<InputContainer>
							<Label>Cost</Label>
							<Input defaultValue={product?.cost} name="cost" />
						</InputContainer>
						<InputContainer>
							<Label>Stock</Label>
							<Input type="number" name="stock" defaultValue={product?.stock} />
						</InputContainer>
						<InputContainer>
							<Label>Active</Label>
							<Select name='active'>
								<Option >Choose</Option>
								<Option value={true}>Yes</Option>
								<Option value={false}>No</Option>
							</Select>
						</InputContainer>
					</Form>
				</Update>

				<ImageSection>
					<ProductImageContainer>
						<ProductImage src={product?.img} />
						<Label htmlFor="uploadimg">
							<Input type="file" id="uploadimg" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
							<Upload style={{ cursor: "pointer", fontSize: "1.8rem", color: "black" }} />
							{file?.name}
						</Label>
					</ProductImageContainer>
					<UpdateButton onClick={handleSubmit} >Update</UpdateButton>
				</ImageSection>

			</Bottom>
		</Container>
	)
}

export default Product
