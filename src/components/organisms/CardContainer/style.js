import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1470px) {
    flex-direction: row;
    width: 90%;
    margin: 2.75rem 0 2.75rem 7vw;
  }
`;
