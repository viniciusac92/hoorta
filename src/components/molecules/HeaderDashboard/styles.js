import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  justify-content: center;
  align-items: center;

  div {
    margin-right: 2.75rem;
  }

  .backContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 25px;
    padding: 0 10px 0 0;
  }

  a {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1308px) {
    div {
      margin-right: 1.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    div {
      margin: 0;
    }
    a:first-child {
      display: none;
    }

    .backContainer a {
      display: inline;
    }

    .backContainer p {
      display: none;
    }
  }
`;

export const Logout = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  font-weight: ${theme.weight.semiBold};
`;
