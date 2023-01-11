import React from "react";
import { useTheme } from "styled-components";
import { CustomTheme } from "./App";
import SimpleTooltip from "react-simple-tooltip";

type Props = {
  content: string;
  children?: JSX.Element;
};

export const Tooltip = (props: Props) => {
  const theme = useTheme() as CustomTheme;
  return (
    <SimpleTooltip
      content={props.content}
      placement="right"
      radius={3}
      fadeDuration={300}
      background={theme.colors.background}
      // border={theme.colors.radiactiveYellow}
      padding={12}
    >
      {props.children}
    </SimpleTooltip>
  );
};

export default Tooltip;
