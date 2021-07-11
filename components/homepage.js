import React from "react";
import styled from "styled-components";
import Directory from "./directory";
import { auth } from "../src/firebase/firebase.utils";

class Homepage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <HomepageContainer>
        <Directory currentUser={this.state.currentUser} />
      </HomepageContainer>
    );
  }
}

export default Homepage;

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
