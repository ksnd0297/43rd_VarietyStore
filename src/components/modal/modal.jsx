import ModalPortal from "./Portal";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	display: ${({ display }) => display};
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	text-align: center;
	z-index: 1000;
	background: #00000090;
	opacity: ${({ opacity }) => opacity};
	animation: ${fadeIn} 300ms;
	transition: all 300ms ease-in-out;
`;

const useFadeIn = (isOpen) => {
	const [isRender, setIsRender] = useState(isOpen);
	const [opacity, setOpacity] = useState(isOpen ? 1 : 0);
	const [display, setDisplay] = useState(isRender ? "flex" : "none");

	useEffect(() => {
		if (!isOpen) {
			setOpacity(0);
			setTimeout(() => {
				setIsRender(false);
				setDisplay("none");
			}, 250);
		} else {
			setOpacity(1);
			setDisplay("flex");
			setIsRender(true);
		}
	}, [isOpen]);
	return {
		isRender,
		opacity,
		display,
	};
};

const Modal = ({ isOpen, onClose, children }) => {
	const { isRender, opacity, display } = useFadeIn(isOpen);

	if (!isRender) return null;
	return (
		<ModalPortal>
			<Background opacity={opacity} display={display} onClick={onClose}>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{children}
				</div>
			</Background>
		</ModalPortal>
	);
};
export default Modal;
