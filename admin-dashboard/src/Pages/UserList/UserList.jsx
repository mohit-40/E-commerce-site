import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../DummyData'
import { DeleteOutline } from "@mui/icons-material";
import styled from 'styled-components'

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
	font-size: 1rem;
	cursor:pointer;
`



export default function UserList() {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	  };
	

	/*//! -----------------------------------  ---------------------------------- */
	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: "userprofile",
			headerName: "User",
			width: 300,
			renderCell: (params) => {
				return (
					<User>
						<ImageContainer>
							<Image src={params.row.avatar} alt="" />
						</ImageContainer>
						{params.row.username}
					</User>
				);
			},
		},
		{ field: 'email', headerName: 'Email', type: 'email', width: 150, },
		{ field: 'transaction', headerName: 'Transaction', type: '', width: 150, },
		{ field: 'status', headerName: 'Status', type: 'status', width: 100, },
		{ field: 'status', headerName: 'Status', type: 'status', width: 100, },
		{
			field: 'action', headerName: 'Action', width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/"+params.row.id} > <Button >Edit</Button> </Link>
						<DeleteOutline style={{cursor:"pointer"}} onClick={() => handleDelete(params.row.id)} />
					</>
				)
			}
		},
	];
	
	/*//! -----------------------------------  ---------------------------------- */

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
}
