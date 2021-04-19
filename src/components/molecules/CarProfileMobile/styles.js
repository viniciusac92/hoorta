import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardStyled = styled.div`
  width: 100%;
  height: 22vh;
  border-radius: 0px 0 100% 100%;
  background-image: url(${card_placeholder});
  background-size: cover;
  overflow: hidden;
  background-position: center;

  @media screen and (max-width: 768px) {
    height: 28vh;
  } ;
`;

CardStyled.Container = styled.div`
  padding: 19px;
`;

CardStyled.Background = styled.div`
  background-color: #09b44dc7;
  height: 100%;
  width: 100%;
`;

CardStyled.Title = styled.div`
  padding-top: 20px;
  text-align: center;

  p {
    color: ${theme.color.white};
  }
`;

CardStyled.Image = styled.div`
  text-align: center;
  margin-top: -100px;

  img {
    height: 182px;
    width: 182px;
    border-radius: 100%;
  }
`;

CardStyled.Logout = styled.div`
  float: left;
`;

CardStyled.Container = styled.div``;
