import React, { useRef, useState } from "react";
import styled from "styled-components";
import Forminput from "./Forminput";
import CustomButton from "./CustomButton";
import { signInWithGoogle } from "../src/firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SigninComponent>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <Forminput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonWrapper>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Google SignIn
            </CustomButton>
          </ButtonWrapper>
        </form>
        {this.email}
        {this.password}
      </SigninComponent>
    );
  }
}
export default SignIn;

// function Singin() {
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   const refEmail = useRef("");
//   const refPass = useRef("");

// const handleChange = (e) => {
//   // setemail(refEmail.current.value);
//   // setpassword(refPass.current.value);
//   const [value, name] = e.currentTarget;
//   console.log(name);
//   // name === "email" ? console.log("email") : console.log("pass");
// };

const SigninComponent = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  > span {
    margin: 10px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
