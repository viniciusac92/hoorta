import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardStyled = styled.div`
  margin-bottom: 15px;
  border: none;
  box-shadow: ${theme.shadow.under};
  width: 98%;
  height: auto;

  @media screen and (min-width: 800px) {
    width: 99%;
    height: 19rem;
  }
`;
