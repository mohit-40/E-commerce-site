import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display:flex;
	align-items: center;
	justify-content:center;
	background: green;
	height:fit-content;
	font-weight: 500;
	font-size: 20px;
`


const Announcement = () => {
	return (
		<Container>
			<p>Super Deal! Free Shipping on Orders Over Rs 500 </p>
		</Container>
	)
}

export default Announcement
