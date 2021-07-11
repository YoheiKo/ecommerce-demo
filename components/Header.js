import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { auth } from "../src/firebase/firebase.utils";

class Header extends React.Component {
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

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <HeaderComponent>
        <LogoLink href="/">
          <LogoContainer src="/crown.svg" width={40} height={40} />
        </LogoLink>
        <OptionsContainer>
          <OptionLink>
            <Link href="/shop">SHOP</Link>
          </OptionLink>
          <OptionLink>
            <Link href="/shop">CONTACT</Link>
          </OptionLink>
          {this.state.currentUser ? (
            <OptionLink>
              <div onClick={() => auth.signOut()}>SIGN OUT</div>
            </OptionLink>
          ) : (
            <OptionLink>
              <Link href="/signin">SIGN IN</Link>
            </OptionLink>
          )}
        </OptionsContainer>
      </HeaderComponent>
    );
  }
}

export default Header;

const HeaderComponent = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoLink = styled(Link)``;

const OptionLink = styled.div`
  padding-left: 15px;
  display: block;
  cursor: pointer;
`;

const LogoContainer = styled(Image)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
