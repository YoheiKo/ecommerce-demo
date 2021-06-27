import React, { useState } from "react";
import styled from "styled-components";
import SHOP_DATA from "../components/data/shopData";
import Preview from "../components/Preview";
import Header from "../components/Header";

function ShopPage() {
  const [shopData, setShopData] = useState(SHOP_DATA);

  return (
    <div>
      <Header />
      <ShoppageContainer>
        {/* {shopData.map(({ id, ...props }) => (
        <Preview key={id} {...props} />
      ))} */}
        {shopData.map((shop) => (
          <Preview key={shop.id} title={shop.title} items={shop.items} />
        ))}
      </ShoppageContainer>
    </div>
  );
}

export default ShopPage;

const ShoppageContainer = styled.div``;
