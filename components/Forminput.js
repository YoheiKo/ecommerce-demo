import React from "react";
import styled, { css } from "styled-components";

function Forminput({ handleChange, label, ...otherProps }) {
  return (
    <GroupContainer>
      <FormInput onChange={handleChange} type {...otherProps} />
      {label ? (
        otherProps.value.length ? (
          <Shrink>{label}</Shrink>
        ) : (
          <FormInputLabel>{label}</FormInputLabel>
        )
      ) : null}
    </GroupContainer>
  );
}

export default Forminput;

const Colors = {
  sub: "gray",
  main: "black",
};

const mixinShrink = css`
  position: absolute;
  top: -14px;
  left: 5px;
  font-size: 12px;
  color: ${Colors.main};
`;

const FormInput = styled.input`
  position: relative;
  background: none;
  background-color: white;
  color: ${Colors.sub};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${Colors.sub};
  margin: 25px 0;
  letter-spacing: ${(props) => (props.type === "password" ? "0.3em" : "")};

  :focus {
    outline: none;
  }
`;

const Shrink = styled.label`
  ${mixinShrink}
`;

const FormInputLabel = styled.label`
  color: ${Colors.sub};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  & ${FormInput}:hover + ${FormInputLabel} {
    ${mixinShrink}
  }
`;
