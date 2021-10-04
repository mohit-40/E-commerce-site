import React, { useState } from 'react'
import styled from 'styled-components'
import { NotificationsNone, Language, Settings, AccountCircle, Menu, Close } from "@mui/icons-material";
import { mobile } from '../../responsive'

const Container = styled.div``
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height:60px;
	background: #215ade;
	position:relative;
`
const Left = styled.div`
	margin-left: 10px;
`
const Logo = styled.div`
	font-size: 1.5rem;
	font-weight:600;
`
const Right = styled.div`
	.close{
		position: relative;
		z-index: 1;
		color: white;
	}
	.active{
		transform: translateX(0);
		transition:all 1.5s ease;
	}
	.hamburger{
		display:none;
		${mobile({
			display:"inline",
		})}
	}
`
const IconContainer = styled.div`
	display: flex;
	.icon{
		font-size: 2rem;
	}	
	${mobile({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
		height:"40vh",
		background: "#000",
		color: "white",
		position:"absolute",
		top: "0",
		left: "0",
		transform: "translateY(-100%)",
	})}
	`
const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
	margin-left: 10px;
`

const Topbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>Admin-Dashboard</Logo>
				</Left>

				<Right>
					{click ? <Close onClick={handleClick} className="close hamburger" /> : <Menu onClick={handleClick} className="hamburger" />}
					<IconContainer className={click ? "active" : ""}>
						<Icon>
							<Settings className="icon" ></Settings>
							{click ? <div className="iconText">Setting</div> : ""}
						</Icon>
						<Icon>
							<Language className="icon" />
							{click ? <div className="iconText">Language</div> : ""}
						</Icon>
						<Icon>
							<NotificationsNone className="icon" />
							{click ? <div className="iconText">Notification</div> : ""}
						</Icon>
						<Icon>
							<AccountCircle className="icon" />
							{click ? <div className="iconText">Account</div> : ""}
						</Icon>
					</IconContainer>
				</Right>
			</Wrapper>
		</Container>
	)
}

export default Topbar
