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
        padding: "0.5em",
        borderRadius: "3px",
        backgroundColor: theme.colors.radiactiveYellow,
        color: "black",
      }}
    >
      {props.text}
    </div>
  );
};

export default Button;
