import React from "react";
import styled from "styled-components";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <ButtonComponent isGoogleSignIn={isGoogleSignIn} {...otherProps}>
      {children}
    </ButtonComponent>
  );
}

export default CustomButton;

const ButtonComponent = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  /* line-height: 50px; */
  padding: 0 15px 0 15px;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  /* font-family: "Open Sans Condensed"; */
  font-weight: bolder;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isGoogleSignIn ? "#4285f4" : "black")};

  :hover {
    background-color: ${(props) =>
      props.isGoogleSignIn ? "#357ae8" : "white"};
    color: ${(props) => (props.isGoogleSignIn ? "white" : "black")};
    border: ${(props) => (props.isGoogleSignIn ? "none" : "1px solid black")};
  }
`;
