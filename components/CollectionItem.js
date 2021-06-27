import React from "react";
import styled from "styled-components";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <CollectionItemContainer>
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      <CollectionFooter>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooter>
    </CollectionItemContainer>
  );
}

export default CollectionItem;

const CollectionItemContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18pxc;
`;

const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

const PriceSpan = styled.span`
  width: 10%;
  margin-bottom: 15px;
`;
