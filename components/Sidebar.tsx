import React from "react";
import styled, { useTheme } from "styled-components";
import { BsHouseDoorFill, BsGithub, BsFileEarmarkPerson } from "react-icons/bs";
import Tooltip from "./Tooltip";

import { GrMail } from "react-icons/gr";
import { CustomTheme } from "./App";
import Link from "next/link";
import hexToRgba from "hex-to-rgba";

const StyledLink = styled(Link)`
  width: 100%;
`;

const DivLinkStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.5em 0em;
  width: 100%;
  &:hover {
    background-color: ${(props) =>
      hexToRgba(props.theme.colors.secondary, 0.5)};
  }
`;

const Sidebar = () => {
  const theme = useTheme() as CustomTheme;
  return (
    <div
      style={{
        width: "4%",
        minWidth: "60px",
        backgroundColor: `${theme.colors.radiactiveYellow}`,
        position: "fixed",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <StyledLink href={"/"} shallow={true}>
        <DivLinkStyled>
          <Tooltip content="Home">
            <BsHouseDoorFill
              size={40}
              color={theme.colors.primaryVariant}
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <StyledLink href={"/?section=contact"} shallow={true}>
        <DivLinkStyled>
          <Tooltip content="Contact">
            <GrMail
              size={40}
              color={theme.colors.primaryVariant}
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <StyledLink href={"/?section=cv"} shallow={true}>
        <DivLinkStyled>
          <Tooltip content="CV">
            <BsFileEarmarkPerson
              size={40}
              color={theme.colors.primaryVariant}
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <DivLinkStyled>
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
      </DivLinkStyled>
    </div>
  );
};

export default Sidebar;
