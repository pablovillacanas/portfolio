import React from "react";
import { useTheme } from "styled-components";
import { BsHouseDoorFill, BsGithub, BsFileEarmarkPerson } from "react-icons/bs";
import Tooltip from "./Tooltip";

import { GrMail } from "react-icons/gr";
import { CustomTheme } from "./App";

type Props = {
  value?: string;
  onClick: (v: "home" | "contact" | "cv") => void;
};

const Sidebar = (props: Props) => {
  const theme = useTheme() as CustomTheme;
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
      <Tooltip content="Home">
        <BsHouseDoorFill
          size={40}
          color={theme.colors.primaryVariant}
          onClick={() => props.onClick("home")}
          style={{ cursor: "pointer" }}
        />
      </Tooltip>
      <Tooltip content="Contact">
        <GrMail
          size={40}
          color={theme.colors.primaryVariant}
          onClick={() => props.onClick("contact")}
          style={{ cursor: "pointer" }}
        />
      </Tooltip>
      <Tooltip content="CV">
        <BsFileEarmarkPerson
          size={40}
          color={theme.colors.primaryVariant}
          onClick={() => props.onClick("cv")}
          style={{ cursor: "pointer" }}
        />
      </Tooltip>
      <Tooltip content="Github">
        <BsGithub
          size={40}
          color={theme.colors.primaryVariant}
          onClick={() => {
            window.open("https://github.com/pablovillacanas", "_newtab");
          }}
          style={{ cursor: "pointer" }}
        />
      </Tooltip>
    </div>
  );
};

export default Sidebar;
