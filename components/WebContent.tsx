import React, { useEffect } from "react";
import styled, { keyframes, useTheme } from "styled-components";

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
  position: relative;
  font-size: 36px;
  animation: 0.8s ${inAnimation} ease-out;
`;

const Content = styled.div`
  animation: 1s ${inAnimation} ease-out;
`;

const WebContent = (props: Props) => {
  const theme: any = useTheme();

  useEffect(() => {
    console.log(props.title);
  }, [props.title]);

  return (
    <div
      key={props.title}
      style={{
        fontFamily: "Quantico, sans-serif",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: "1 1 0%",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: `${theme.colors.radiactiveYellow}`,
        }}
      >
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
      </div>
      <Content style={{ flex: 3 }}>{props.children}</Content>
    </div>
  );
};

export default WebContent;
