import styled from "styled-components";
import Directory from "./directory";

function Homepage() {
  return (
    <HomepageContainer>
      <Directory />
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
