import React from 'react';
import styled from 'styled-components';
type Props = {
	text: string;
	onClick: () => void;
};

const StyledButton = styled.div`
	height: 1.5em;
	text-align: center;
	width: fit-content;
	cursor: pointer;
	padding: 0.5em;
	border-radius: 3px;
	background: linear-gradient(
		45deg,
		rgba(163, 184, 0, 1) 0%,
		rgba(253, 187, 45, 1) 100%
	);
	background-clip: text;
	-webkit-background-clip: text; /* For Safari */
	color: transparent;
	border: 3px solid transparent;
	border-image: linear-gradient(
		45deg,
		rgba(163, 184, 0, 1) 0%,
		rgba(253, 187, 45, 1) 100%
	);
	border-image-slice: 1;
	transition: all 150ms ease-in-out;
	&:hover {
		background-image: linear-gradient(
			45deg,
			rgba(163, 184, 0, 1) 0%,
			rgba(253, 187, 45, 1) 100%
		);
		color: #000;
		background: linear-gradient(
			45deg,
			rgba(163, 184, 0, 1) 0%,
			rgba(253, 187, 45, 1) 100%
		);
		border-image-slice: 1;
	}
`;
const Button = (props: Props) => {
	return (
		<StyledButton onClick={() => props.onClick()}>{props.text}</StyledButton>
	);
};

export default Button;
