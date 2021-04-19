import styled from "styled-components";
import theme from "../../../styles/theme";

const { color, shadow, radius } = theme;

export const GroupLink = styled.div`
  margin-top: -8px;
  margin-bottom: -8px;
  outline: none;
`;

export const Item = styled.a`
  display: flex;
  width: 100%;
  padding: 5px 20px;
  :hover {
    background-color: ${color.grayDark};
  }
`;
