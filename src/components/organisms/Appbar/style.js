import styled from "styled-components";
import theme from "../../../styles/theme";

export const AppBarStyled = styled.div`
  width: 100vw;
  height: auto;
  background-color: ${theme.color.light};
  display: flex;
  box-shadow: ${theme.shadow.on};
  justify-content: space-around;

  div {
    display: flex;
    height: 7vh;
  }
`;
