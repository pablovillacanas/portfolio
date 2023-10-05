import { useEffect, useState } from "react";
import { BsFileEarmarkPerson, BsGithub, BsHouseDoorFill } from "react-icons/bs";
import styled, { useTheme } from "styled-components";
import Tooltip from "./Tooltip";

import Link from "next/link";
import { useRouter } from "next/router";
import { GrMail } from "react-icons/gr";
import { CustomTheme } from "./App";

const StyledLink = styled(Link)`
  width: 100%;
`;

interface DivLinkStyledProps {
  highlight?: boolean;
}
const DivLinkStyled = styled.div<DivLinkStyledProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.5em 0em;
  width: 100%;
  color: transparent;
  background-color: ${(props) =>
    props.highlight && props.theme.colors.background};
  &:hover {
    border-left: ${(props) =>
      !props.highlight && `5px solid ${props.theme.colors.background}`};
    transition: 0.2s;
  }
`;

const Sidebar = () => {
  const theme = useTheme() as CustomTheme;
  const { query } = useRouter();

  const [layout, setLayout] = useState("desktop");

  useEffect(() => {
    setLayout(window?.innerWidth < 875 ? "mobile" : "desktop");
  }, [layout]);

  console.log("layout :>> ", layout);
  return (
    <div
      style={{
        minWidth: "60px",
        background: `linear-gradient(0deg, rgba(163,184,0,1) 0%, rgba(253,187,45,1) 100%)`,
        position: "fixed",
        height: `${layout == "desktop" ? "100vh" : ""}`,
        display: "flex",
        flexDirection: `${layout == "desktop" ? "column" : "row"}`,
        width: `${layout == "desktop" ? "4%" : "100%"}`,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      <StyledLink href={"/"} shallow={true}>
        <DivLinkStyled highlight={!query.section || query.section === "home"}>
          <Tooltip content="Home">
            <BsHouseDoorFill
              size={40}
              color={
                !query.section || query.section === "home"
                  ? "#D9BA1E"
                  : theme.colors.primaryVariant
              }
              style={{
                cursor: "pointer",
              }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <StyledLink href={"/?section=contact"} shallow={true}>
        <DivLinkStyled highlight={query.section === "contact"}>
          <Tooltip content="Contact">
            <GrMail
              size={40}
              color={
                query.section === "contact"
                  ? "#D3B91D"
                  : theme.colors.primaryVariant
              }
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <StyledLink href={"/?section=cv"} shallow={true}>
        <DivLinkStyled highlight={query.section === "cv"}>
          <Tooltip content="CV">
            <BsFileEarmarkPerson
              size={40}
              color={
                query.section === "cv" ? "#CCB919" : theme.colors.primaryVariant
              }
              style={{ cursor: "pointer" }}
            />
          </Tooltip>
        </DivLinkStyled>
      </StyledLink>

      <StyledLink href={"."}>
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
      </StyledLink>
    </div>
  );
};

export default Sidebar;
