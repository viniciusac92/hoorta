import styled from "styled-components";

export const List = styled.div`
  max-width: 1000px;
  > div > p {
    text-align: left;
    margin-left: 30px;
  }

  @media screen and (max-width: 800px) {
    > div > p {
      text-align: center;
      font-size: 24px;
    }
  }
`;
