import React from "react";
import { useTheme } from "styled-components";
type Props = {
  text: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  const theme: any = useTheme();
  return (
    <div
      style={{
        height: "1.5em",
        textAlign: "center",
        width: "fit-content",
        cursor: "pointer",
        padding: "0.5em",
        borderRadius: "3px",
        backgroundColor: theme.colors.radiactiveYellow,
        color: "black",
      }}
      onClick={() => props.onClick()}
    >
      {props.text}
    </div>
  );
};

export default Button;
