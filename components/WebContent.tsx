import React from "react";
import { useTheme } from "styled-components";

type Props = {
  children: JSX.Element;
  title: string;
  subtitle: string;
};

const WebContent = (props: Props) => {
  const theme: any = useTheme();

  return (
    <div
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
        <div style={{ fontSize: 100 }}>{props.title}</div>
        <div style={{ fontSize: 36 }}>{props.subtitle}</div>
      </div>
      <div style={{ flex: 3 }}>{props.children}</div>
    </div>
  );
};

export default WebContent;
