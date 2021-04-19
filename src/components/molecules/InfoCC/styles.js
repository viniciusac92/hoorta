import styled from "styled-components";

export const InfosCCStyled = styled.div`
  div {
    height: auto;
  }
  p {
    font-size: 20px;
    padding: 12px 34px;
  }

  p:nth-child(1) {
    font-size: 30px;
    align-self: center;
  }

  @media (max-width: 1024px) {
    p:nth-child(1) {
      font-size: 26px;
      text-align: center;
    }

    p {
      padding: 12px 2px;
      font-size: 16px;
    }
  }
`;
