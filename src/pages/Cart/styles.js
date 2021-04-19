import styled from "styled-components";
import theme from "../../styles/theme";

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const EmptyMessage = styled.p`
  color: ${theme.color.textGray};
  cursor: pointer;
  span {
    font-weight: ${theme.weight.semiBold};
  }

  &:hover {
    color: ${theme.color.primary};
  }
`;

export const CartModal = styled.div`
  div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 30%;

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
    outline: none;

    background-color: ${theme.color.white};
    box-shadow: ${theme.shadow};
    border-radius: ${theme.radius};
    z-index: 1;
  }

  &:before {
    content: "";
    position: fixed;
    background-color: ${theme.color.black};
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    z-index: 0;
  }

  @media screen and (min-width: 800px) {
    max-width: 600px;
  }
`;
