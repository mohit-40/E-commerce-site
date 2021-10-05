import React from 'react'
import { Upload } from '@mui/icons-material'
import Chart from '../../Component/Chart/Chart'
import {productData } from "../../DummyData"
import styled from 'styled-components'

const Container=styled.div`
	margin: 1rem;
`
const Heading=styled.div`
	font-size: 2rem;
	font-weight: 600;
`
const Top=styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Left=styled.div`
	flex: 2;
	min-width: 300px;
`
const Right=styled.div`
	flex:1;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
	margin:1rem;
	padding: 1rem;
`
const RightTop=styled.div`
	display: flex;
`
const LogoImageContainer=styled.div`
	width:40px;
	height:40px;
	margin-right: 1rem;
`
const LogoImage=styled.img`
	height:100%;
	width:100%;
	border-radius:50%;
	`
const ProductName=styled.div`
	font-size: 1.4rem;
	font-weight: 600;
	color: brown;
`
const RightBottom=styled.div`
	margin:2rem 0;
`
const ProductDetail=styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin:15px 0;
	font-size: 1.2rem;
	font-weight:600;
`
const Key=styled.div``
const Value=styled.div`
	color:gray;
`

const Bottom=styled.div`
	margin: 0 1rem;
	padding: 1rem;
	-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

	display: flex;
	flex-wrap: wrap;
`
const Update=styled.div`
	flex:2;
	min-width:300;
`
const Form=styled.form`
	display: flex;
	flex-direction: column;
`
const InputContainer=styled.div`
	display: flex;
	flex-direction: column;
	width:50%;
	margin-top:1rem;
`
const Label=styled.label`
	font-size:1.2rem;
	font-weight: 600;
	color:gray;
	margin-bottom:10px;
`
const Input =styled.input`
	outline:none;
	border:none;
	border-bottom:2px solid gray;
	height:20px;
	font-size:1.1rem;
	color:brown;
`
const Select=styled.select`
	font-size: 1.1rem;
`
const Option=styled.option``
const ImageSection=styled.div`
	flex:1;
`
const ProductImageContainer=styled.div`
	height:250px;
	width:250px;
	display: flex;
	align-items: center;
	`
const ProductImage=styled.img`
	height:100%;
	width:100%;
	margin-right: 20px;
`
const UpdateButton=styled.button`
	cursor: pointer;
	background-color: darkblue;
	color:white;
	padding:10px;
	margin-top:10px;
	width:60%;
`


const Product = () => {
	return (
		<Container>
			<Heading>Product</Heading>
			<Top>
				<Left>
					<Chart title="Sales Performance" xDataKey="name" lineDataKey="Sales" data={productData}/>
				</Left>
				<Right>
					<RightTop>
						<LogoImageContainer>
							<LogoImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
						</LogoImageContainer>
						<ProductName>Apple Airpods</ProductName>
					</RightTop>
					<RightBottom>
						<ProductDetail>
							<Key>id:</Key>
							<Value>123</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>Sales:</Key>
							<Value>5212</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>Active</Key>
							<Value>Yes</Value>
						</ProductDetail>
						<ProductDetail>
							<Key>InStock</Key>
							<Value>No</Value>
						</ProductDetail>
					</RightBottom>
				</Right>
			</Top>
			<Bottom>
				<Update>
					<Form>
						<InputContainer>
							<Label>Product Name</Label>
							<Input defaultValue="Apple airpots"/>
						</InputContainer>
						<InputContainer>
							<Label>In Stock</Label>
							<Select>
							<Option selected>Choose</Option>
							<Option value="Yes">Yes</Option>
							<Option value="No">No</Option>
							</Select>
						</InputContainer>
						<InputContainer>
							<Label>Active</Label>
							<Select>
							<Option selected>Choose</Option>
							<Option value="Yes">Yes</Option>
							<Option value="No">No</Option>
							</Select>
						</InputContainer>
					</Form>
				</Update>

				<ImageSection>
					<ProductImageContainer>
						<ProductImage src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
						<Label for="uploadimg">
							<Input type="file" id="uploadimg" style={{display:"none"}} />
							<Upload style={{cursor:"pointer",fontSize:"1.8rem" , color:"black"}}/>
						</Label>
					</ProductImageContainer>
					<UpdateButton>Update</UpdateButton>
				</ImageSection>

			</Bottom>
		</Container>
	)
}

export default Product
