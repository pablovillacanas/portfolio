import React from "react";
import { useTheme } from "styled-components";
import {
  BsHouseDoor,
  BsCode,
  BsEnvelope,
  BsFileEarmarkPerson,
} from "react-icons/bs";
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
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BsHouseDoor size={40} color={theme.colors.primaryVariant} />
      <BsEnvelope size={40} color={theme.colors.primaryVariant} />
      <BsFileEarmarkPerson size={40} color={theme.colors.primaryVariant} />
      <BsCode size={40} color={theme.colors.primaryVariant} />
    </div>
  );
};

export default Sidebar;
