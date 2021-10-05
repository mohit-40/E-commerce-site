import React from 'react'
import styled from 'styled-components'
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentity,
	Storefront,
	AttachMoney,
	BarChart,
	MailOutline,
	ChatBubbleOutline,
	DynamicFeed,
	WorkOutline,
	Report,
  } from "@mui/icons-material";

const Container =styled.div`
	flex:1;
	background-color: #c3cfeb;
	position: sticky;
	top:60px;
	z-index:0.9;
	height: calc(100vh - 60px);
	overflow-y: auto;
	
`
const Wrapper =styled.div`
	display: flex;
	flex-direction: column;
`
const Section =styled.div`
	margin:1rem 0 0 1rem;
`
const SectionTitle =styled.div`
	font-size: 1rem;
  	color: brown;
`
const SectionItemContainer =styled.div`
	margin-left:1rem;
`
const SectionItem =styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.4rem;
  	cursor:pointer;
`
const SectionItemText=styled.div`
	margin-left: 0.3rem;
`


const Sidebar = () => {
	return (
		<Container>
			<Wrapper>
				<Section>
					<SectionTitle>Dashboard</SectionTitle>
					<SectionItemContainer>
						<SectionItem><LineStyle/><SectionItemText>Home </SectionItemText></SectionItem>
						<SectionItem><Timeline/><SectionItemText>Analytic </SectionItemText></SectionItem>
						<SectionItem><TrendingUp/><SectionItemText>Sales </SectionItemText></SectionItem>
					</SectionItemContainer>
				</Section>
				<Section>
					<SectionTitle>Quick Menu</SectionTitle>
					<SectionItemContainer>
						<SectionItem><PermIdentity/><SectionItemText>Users </SectionItemText></SectionItem>
						<SectionItem><Storefront/><SectionItemText>Products </SectionItemText></SectionItem>
						<SectionItem><AttachMoney/><SectionItemText>Transactions </SectionItemText></SectionItem>
						<SectionItem><BarChart/><SectionItemText>Reports </SectionItemText></SectionItem>
					</SectionItemContainer>
				</Section>
				<Section>
					<SectionTitle>Notification</SectionTitle>
					<SectionItemContainer>
						<SectionItem><MailOutline/><SectionItemText>Mail </SectionItemText></SectionItem>
						<SectionItem><WorkOutline/><SectionItemText>Feedback </SectionItemText></SectionItem>
						<SectionItem><ChatBubbleOutline/><SectionItemText>Messages </SectionItemText></SectionItem>
					</SectionItemContainer>
				</Section>
				<Section>
					<SectionTitle>Staff</SectionTitle>
					<SectionItemContainer>
						<SectionItem><DynamicFeed/><SectionItemText>Manages </SectionItemText></SectionItem>
						<SectionItem><Timeline/><SectionItemText>Analytics </SectionItemText></SectionItem>
						<SectionItem><Report/><SectionItemText>Reports </SectionItemText></SectionItem>
					</SectionItemContainer>
				</Section>
			</Wrapper>
		</Container>
	)
}

export default Sidebar
