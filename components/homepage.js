import styled from "styled-components";

function Homepage() {
  return (
    <HomepageContainer>
      <DirectoryMenuContainer>
        <MenuItemContainer>
          <ContentContainer>
            <TitleContainer>HATS</TitleContainer>
            <SubtitelContainer>Shop Now</SubtitelContainer>
          </ContentContainer>
        </MenuItemContainer>
        <MenuItemContainer>
          <ContentContainer>
            <TitleContainer>JACKETS</TitleContainer>
            <SubtitelContainer>Shop Now</SubtitelContainer>
          </ContentContainer>
        </MenuItemContainer>
        <MenuItemContainer>
          <ContentContainer>
            <TitleContainer>SNEAKERS</TitleContainer>
            <SubtitelContainer>Shop Now</SubtitelContainer>
          </ContentContainer>
        </MenuItemContainer>
        <MenuItemContainer>
          <ContentContainer>
            <TitleContainer>WOMENS</TitleContainer>
            <SubtitelContainer>Shop Now</SubtitelContainer>
          </ContentContainer>
        </MenuItemContainer>
        <MenuItemContainer>
          <ContentContainer>
            <TitleContainer>MENS</TitleContainer>
            <SubtitelContainer>Shop Now</SubtitelContainer>
          </ContentContainer>
        </MenuItemContainer>
      </DirectoryMenuContainer>
    </HomepageContainer>
  );
}

export default Homepage;

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  /* Three values: flex-grow | flex-shrink | flex-basis */
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  /* up horizontal down */
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const ContentContainer = styled.div`
  height: 90px;
  /* vertical horizontal */
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
`;

const TitleContainer = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const SubtitelContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
