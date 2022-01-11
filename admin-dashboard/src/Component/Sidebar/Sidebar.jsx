import React from 'react'
import { Link } from 'react-router-dom'
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

const Container = styled.div`
	flex:1;
	background-color: #c3cfeb;
	position: sticky;
	top:60px;
	z-index:0.9;
	height: calc(100vh - 60px);
	overflow-y: auto;
	
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`
const Section = styled.div`
	margin:1rem 0 0 1rem;
`
const SectionTitle = styled.div`
	font-size: 1rem;
  	color: brown;
`
const SectionItemContainer = styled.div`
	margin-left:1rem;
`
const SectionItem = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0.4rem;
  	cursor:pointer;

	&:hover{
		background-color: blue;
		border-radius: 10px;
		color: white;
	}
`
const SectionItemText = styled.div`
	margin-left: 0.3rem;
`


const Sidebar = () => {
	return (
		<Container>
			<Wrapper>
				<Section>
					<SectionTitle>Dashboard</SectionTitle>
					<SectionItemContainer>
						<Link to="/" className="text-link"><SectionItem><LineStyle /><SectionItemText>Home </SectionItemText></SectionItem> </Link>
						{/* <Link to="/" className="text-link"><SectionItem><Timeline /><SectionItemText>Analytic </SectionItemText></SectionItem></Link> */}
						{/* <Link to="/" className="text-link"><SectionItem><TrendingUp /><SectionItemText>Sales </SectionItemText></SectionItem></Link> */}
					</SectionItemContainer>
				</Section>
				<Section>
					<SectionTitle>Quick Menu</SectionTitle>
					<SectionItemContainer>
						<Link to="/users" className="text-link"><SectionItem><PermIdentity /><SectionItemText>Users </SectionItemText></SectionItem></Link>
						<Link to="/productList" className="text-link"><SectionItem><Storefront /><SectionItemText>Products </SectionItemText></SectionItem></Link>
						<Link to="/transaction" className="text-link"><SectionItem><AttachMoney /><SectionItemText>Transactions </SectionItemText></SectionItem></Link>
						<Link to="/cancelRequest" className="text-link"><SectionItem><BarChart /><SectionItemText>Cancel Request </SectionItemText></SectionItem></Link>
					</SectionItemContainer>
				</Section>
				<Section>
					<SectionTitle>Notification</SectionTitle>
					<SectionItemContainer>
						<Link to="/createProduct" className="text-link"><SectionItem><MailOutline /><SectionItemText> New Product </SectionItemText></SectionItem></Link>
						<Link to="/createUser" className="text-link"><SectionItem><WorkOutline /><SectionItemText> New User </SectionItemText></SectionItem></Link>
						<Link to="/login" className="text-link"><SectionItem><WorkOutline /><SectionItemText> Login </SectionItemText></SectionItem></Link>
						{/* <Link to="/" className="text-link"><SectionItem><ChatBubbleOutline /><SectionItemText>Messages </SectionItemText></SectionItem></Link> */}
					</SectionItemContainer>
				</Section>
				{/* <Section>
					<SectionTitle>Staff</SectionTitle>
					<SectionItemContainer>
						<Link to="/" className="text-link"><SectionItem><DynamicFeed /><SectionItemText>Manages </SectionItemText></SectionItem></Link>
						<Link to="/" className="text-link"><SectionItem><Timeline /><SectionItemText>Analytics </SectionItemText></SectionItem></Link>
						<Link to="/" className="text-link"><SectionItem><Report /><SectionItemText>Reports </SectionItemText></SectionItem></Link>
					</SectionItemContainer>
				</Section> */}
			</Wrapper>
		</Container>
	)
}

export default Sidebar
