import React from 'react';
import styled, { keyframes } from 'styled-components';

const TickerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	gap: 1em;
	overflow: hidden;
`;

const TickerAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-3000%);
  }
`;

const TickerText = styled.span`
	display: inline-block;
	align-self: center;
	min-width: 50px;
	white-space: nowrap;
	animation: ${TickerAnimation} 30s linear infinite; /* Ajusta la velocidad según tus preferencias */
	margin-right: 1rem; /* Espacio entre elementos (opcional) */
`;

const Ticker = ({ data }) => {
	return (
		<TickerContainer>
			{data.map((item, index) => (
				<TickerText key={index}>{item}</TickerText>
			))}
		</TickerContainer>
	);
};

export default Ticker;
