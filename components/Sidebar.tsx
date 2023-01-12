import React from "react";
import { useTheme } from "styled-components";
import { BsHouseDoorFill, BsGithub, BsFileEarmarkPerson } from "react-icons/bs";
import Tooltip from "./Tooltip";

import { GrMail } from "react-icons/gr";
import { CustomTheme } from "./App";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  value?: string;
};

const Sidebar = (props: Props) => {
  const theme = useTheme() as CustomTheme;
  const router = useRouter();
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
        <Link href={"/"} shallow={true}>
          <BsHouseDoorFill
            size={40}
            color={theme.colors.primaryVariant}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Tooltip>
      <Tooltip content="Contact">
        <Link href={"/?section=contact"} shallow={true}>
          <GrMail
            size={40}
            color={theme.colors.primaryVariant}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </Tooltip>
      <Tooltip content="CV">
        <Link href={"/?section=cv"} shallow={true}>
          <BsFileEarmarkPerson
            size={40}
            color={theme.colors.primaryVariant}
            style={{ cursor: "pointer" }}
          />
        </Link>
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
      {router.query.value}
    </div>
  );
};

export default Sidebar;
