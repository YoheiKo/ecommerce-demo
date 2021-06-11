import React, { useState } from "react";
import MenuItem from "./menu-item";
import styled from "styled-components";

function Directory() {
  const [section, setSection] = useState(
    [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
        size: "240px",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
        size: "240px",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
        size: "240px",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "380px",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "380px",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
    []
  );

  return (
    <DirectoryMenuContainer>
      {section.map(({ title, imageUrl, id, size }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          imageUrl={imageUrl}
          size={size}
        />
      ))}
    </DirectoryMenuContainer>
  );
}

export default Directory;

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
