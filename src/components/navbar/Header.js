import { useState } from "react";

import styled from "styled-components";
const HeaderContainer = styled.header`
	height: 5rem;
	width: 5rem;

	position: fixed;
	top: 0;
	right: 0;
`;
const SideBarBtn = styled.div`
	cursor: pointer;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	align-items: center;
	justify-content: center;
`;
const SideBarDash = styled.div`
	width: 3rem;
	height: 0.4rem;
	background: #aba8d3;
	transition: all 200ms linear;
	&:nth-of-type(2) {
		visibility: ${({ isClicked }) => (isClicked ? "hidden" : "visible")};
		opacity: ${({ isClicked }) => (isClicked ? "0" : "1")};
	}
	&:nth-of-type(1) {
		transform: ${({ isClicked }) => (isClicked ? "rotate(45deg) translate(5px, 13px)" : "rotate(0) translate(0,0)")};
	}
	&:nth-of-type(3) {
		transform: ${({ isClicked }) => (isClicked ? "rotate(-45deg) translate(5px, -13px) " : "rotate(0) translate(0,0)")};
	}
`;
const Header = () => {
	const [clicked, setClicked] = useState(false);
	return (
		<HeaderContainer>
			<SideBarBtn onClick={() => setClicked((prev) => !prev)}>
				<SideBarDash key="1" isClicked={clicked} />
				<SideBarDash key="2" isClicked={clicked} />
				<SideBarDash key="3" isClicked={clicked} />
			</SideBarBtn>
		</HeaderContainer>
	);
};
export default Header;
