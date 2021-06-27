import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

function Header() {
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
      </OptionsContainer>
    </HeaderComponent>
  );
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
