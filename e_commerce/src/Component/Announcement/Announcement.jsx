import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display:flex;
	align-items: center;
	justify-content:center;
	background: green;
	height:25px;
	font-weight: 500;
	font-size: 20px;
`


const Announcement = () => {
	return (
		<Container>
			<p>	Sale will start at sharp 5:30 PM </p>
		</Container>
	)
}

export default Announcement
