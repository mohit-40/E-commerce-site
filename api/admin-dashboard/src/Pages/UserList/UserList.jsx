import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'; 
import { DeleteOutline } from "@mui/icons-material";
import styled from 'styled-components'
import {userRequest} from "../../requestMethod"

const User = styled.div`
	display: flex;
`
const ImageContainer = styled.div`
	height:40px;
	width:40px;
	margin-right: 10px;
`
const Image = styled.img`
	height:100%;
	width:100%;
	border-radius: 50%;
	object-fit:cover;
`
const Button=styled.button`
	margin-right: 10px;
	border-radius: 5px;
	outline: none;
	background-color: blueviolet;
	color:white;
	font-size: 1rem;
	cursor:pointer;
`



export default function UserList() { 
	const [users , setUsers] =useState([]);
	useEffect(()=>{
		const fetchUser=async()=>{
			try {
				const res = await userRequest.get("/user/allusers")
				setUsers(res.data);
				console.log(res.data,"hgchfjukyfhv");
			} catch(error) {
				console.log(error.message);
			}
		}
		fetchUser();
	},[]);


	const handleDelete = async(id) => { 
		try {
			await userRequest.delete(`/user/${id}`);
			setUsers(users.filter((u)=>u._id != id ));
		} catch (error) {
			console.log(error.message);
		}
	};
	

	/*//! -----------------------------------  ---------------------------------- */
	const columns = [
		{ field: '_id', headerName: 'ID', width: 150 },
		{
			field: "username",
			headerName: "User",
			width: 300,
			renderCell: (params) => {
				return (
					<User>
						<ImageContainer>
							<Image src={params.row.img} alt="" />
						</ImageContainer>
						{params.row.username}
					</User>
				);
			},
		},
		{ field: 'email', headerName: 'Email', type: 'email', width:200, }, 
		{
			field: 'action', headerName: 'Action', width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/"+params.row._id} > <Button >Edit</Button> </Link>
						<DeleteOutline style={{cursor:"pointer"}} onClick={() => handleDelete(params.row._id)} />
					</>
				)
			}
		},
	];
	
	/*//! -----------------------------------  ---------------------------------- */

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<DataGrid
				rows={users}
				columns={columns}
				pageSize={10}
				getRowId={(row) => row._id}
				rowsPerPageOptions={[10]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}