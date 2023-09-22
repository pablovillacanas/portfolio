import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  children: JSX.Element;
  title: string;
  subtitle: string;
};

const inAnimation = keyframes`
  from {
    transform: translateX(-300px);
    opacity: 0.2;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Title = styled.div`
  position: relative;
  font-size: 100px;
  animation: 0.6s ${inAnimation} ease-out;
`;

const SubTitle = styled.div`
  background: linear-gradient(
    45deg,
    rgba(163, 184, 0, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
  font-size: 36px;
  animation: 0.8s ${inAnimation} ease-out;
`;

const Content = styled.div`
  flex: 3;
  animation: 1s ${inAnimation} ease-out;
`;

const WebContent = (props: Props) => {
  return (
    <div
      key={props.title}
      style={{
        fontFamily: "Quantico, sans-serif",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "100px",
      }}
    >
      <div
        style={{
          flex: "1 1 0%",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Title>
          <span>{props.title}</span>
        </Title>
        <SubTitle>{props.subtitle}</SubTitle>
      </div>
      <Content>{props.children}</Content>
    </div>
  );
};

export default WebContent;
