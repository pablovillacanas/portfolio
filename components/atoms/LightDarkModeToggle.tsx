import styled from "styled-components";

const StyledLabel = styled.label`
  width: 50px;
  height: 24px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 200px;
  box-shadow: inset 0px 5px 12px rgba(0, 0, 0, 0.4),
    inset 0px -5px 15px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  img {
    position: absolute;
    width: 12px;
    top: 5px;
    z-index: 100;
    &.sun {
      width: 14px;
      left: 5px;
      fill: #fff;
      transition: 0.3s;
    }
    &.moon {
      left: 34px;
      fill: #7e7e7e;
      transition: 0.3s;
    }
  }
  &:after {
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    top: 3px;
    left: 3px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 18px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
  transition: 0.3s;

  &:after {
    transition: 0.3s;
  }
`;

const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
  &:checked + label {
    background: #242424;
  }
  &:checked + label:after {
    left: 48px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
  &:active:after {
    width: 26px;
  }
  &:checked + label + .background {
    background: #242424;
  }
  &:checked + label img.sun {
    fill: #7e7e7e;
  }
  &:checked + label img.moon {
    fill: #fff;
  }
`;

interface Props {
  darkModeEnabled?: boolean;
  onToggle: () => void;
}
const LightDarkToggle = (props: Props) => {
  return (
    <>
      <StyledCheckbox
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => props.onToggle()}
        checked={props.darkModeEnabled}
      />
      <StyledLabel htmlFor="darkmode-toggle">
        <img className="sun" src="/svg/sun.svg" alt="sunicon" />
        <img className="moon" src="/svg/moon.svg" alt="moonicon" />
      </StyledLabel>
    </>
  );
};

export default LightDarkToggle;
