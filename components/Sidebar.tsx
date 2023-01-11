import React from "react";
import { useTheme } from "styled-components";
import { BsHouseDoorFill, BsGithub, BsFileEarmarkPerson } from "react-icons/bs";

import { GrMail } from "react-icons/gr";
type Props = {
  value?: string;
  onClick: (v: "home" | "contact" | "cv") => void;
};

const Sidebar = (props: Props) => {
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
      <BsHouseDoorFill
        size={40}
        color={theme.colors.primaryVariant}
        onClick={() => props.onClick("home")}
        style={{ cursor: "pointer" }}
      />
      <GrMail
        size={40}
        color={theme.colors.primaryVariant}
        onClick={() => props.onClick("contact")}
        style={{ cursor: "pointer" }}
      />
      <BsFileEarmarkPerson
        size={40}
        color={theme.colors.primaryVariant}
        onClick={() => props.onClick("cv")}
        style={{ cursor: "pointer" }}
      />
      <BsGithub
        size={40}
        color={theme.colors.primaryVariant}
        onClick={() => {
          window.open("https://github.com/pablovillacanas", "_newtab");
        }}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Sidebar;
