import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

const CardStyled = styled.div`
  width: 100%;
  height: 268px;
  margin: 20px;
  border-radius: ${theme.radius};
  background-position: left;
  background-size: cover;
  background-image: url(${card_placeholder});
  overflow: hidden;

  p {
    margin-top: 12px;
    color: ${theme.color.white};
  }
`;

CardStyled.Background = styled.div`
  background-color: #09b44dc7;
  background-size: contain;
  width: 100%;
  height: 268px;
`;

CardStyled.Container = styled.div`
  margin: -268px 0 0 196px;
`;

CardStyled.Image = styled.img`
  height: 279px;
  width: 179px;
`;

CardStyled.Icon = styled.div`
  float: right;
  margin-top: -55px;
`;

export default CardStyled;
