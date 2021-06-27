import React from "react";
import styled from "styled-components";
import CollectionItem from "../components/CollectionItem";

function Preview({ title, items }) {
  return (
    <PreviewContainer>
      <Title>{title?.toUpperCase()}</Title>
      <PreviewInside>
        {items
          ?.filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemProps }) => (
            <CollectionItem key={id} {...otheritemProps} />
          ))}
      </PreviewInside>
    </PreviewContainer>
  );
}

export default Preview;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const PreviewInside = styled.div`
  display: flex;
  justify-content: space-between;
`;
