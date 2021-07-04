import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Singin from "../components/Singin";

function signin() {
  return (
    <div>
      <Header />
      <Singin />
      <SignInAndOut></SignInAndOut>
    </div>
  );
}

export default signin;

const SignInAndOut = styled.div``;
