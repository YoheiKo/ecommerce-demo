import React from "react";
import styled from "styled-components";

function CustomButton({ children, ...otherProps }) {
  return <ButtonComponent {...otherProps}>{children}</ButtonComponent>;
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
  background-color: black;
  color: white;
  text-transform: uppercase;
  /* font-family: "Open Sans Condensed"; */
  font-weight: bolder;
  border: none;
  cursor: pointer;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
