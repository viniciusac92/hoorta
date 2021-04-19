import styled from "styled-components";
import theme from "../../../styles/theme";

const CardInfoStyled = styled.div`
  width: 100%;
  max-width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  margin: 2rem auto;

  @media screen and (min-width: 1470px) {
    margin: 0;
    width: 50%;
  }
`;

CardInfoStyled.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 400px;
  align-items: space-between;
`;

CardInfoStyled.InputWrap = styled.div`
  display: flex;
  min-width: 100%;
  align-items: center;

  input {
    all: unset;
    border: 1.2px solid black;
    border-radius: 4.5px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  input:checked {
    background-color: ${theme.color.primary};
    opacity: 0.8;
  }

  span {
    padding-left: 1rem;
  }
`;

CardInfoStyled.TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${theme.color.textGray};

  &:last-child {
    color: ${theme.color.black};
    font-weight: ${theme.weight.semiBold};
  }
`;

export default CardInfoStyled;
