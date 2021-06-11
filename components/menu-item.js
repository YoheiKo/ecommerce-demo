import React from "react";
import styled from "styled-components";

function MenuItem({ title, imageUrl, size }) {
  return (
    <TopContainer>
      <MenuItemContainer
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: `${size}`,
        }}
      ></MenuItemContainer>
      <ContentContainer>
        <TitleContainer>{title}</TitleContainer>
        <SubtitelContainer>Shop Now</SubtitelContainer>
      </ContentContainer>
    </TopContainer>
  );
}

export default MenuItem;

const TopContainer = styled.div`
  min-width: 30%;
  /* height: 240px; */
  /* Three values: flex-grow | flex-shrink | flex-basis */
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  /* up horizontal down */
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

const MenuItemContainer = styled.div`
  //background
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  //

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
  background-color: white;
  opacity: 0.7;
  position: absolute;
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
