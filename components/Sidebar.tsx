import React from "react";
import { useTheme } from "styled-components";

type Props = {
  value?: string;
};

const Sidebar = (_props: Props) => {
  const theme: any = useTheme();
  return (
    <div
      style={{
        width: "4%",
        minWidth: "60px",
        backgroundColor: `${theme.colors.radiactiveYellow}`,
      }}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
