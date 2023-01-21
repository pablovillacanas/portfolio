import React from "react";
import styled, { useTheme } from "styled-components";
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
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.radiactiveYellow};
  border: 3px solid ${(props) => props.theme.colors.radiactiveYellow};
  &:hover {
    background-color: ${(props) => props.theme.colors.radiactiveYellow};
    color: #000;
  }
`;

const Button = (props: Props) => {
  return (
    <StyledButton onClick={() => props.onClick()}>{props.text}</StyledButton>
  );
};

export default Button;
