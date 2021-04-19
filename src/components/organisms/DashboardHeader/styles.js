import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.75rem 0 2.75rem 7vw;
  width: 60vw;

  @media screen and (max-width: 800px) {
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 2rem 0 2rem 7vw;
  }
`;
