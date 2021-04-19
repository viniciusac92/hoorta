import styled from "styled-components";
import theme from "../../../styles/theme";

export const ContainerStyled = styled.div`
  width: 56vw;
  display: flex;
  flex-flow: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`;

ContainerStyled.Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;

  button {
    margin: 45px 20px 0 87px;
    width: 140px;
  }

  /* @media (max-width: 1024px) {
    button {
      margin: 45px 20px 0 87px;
    }
  } */
`;

ContainerStyled.Register = styled.div`
  padding: 10px;
  font-size: 25px;
  text-align: center;

  span {
    color: ${theme.color.primary};
  }
`;

ContainerStyled.IconModal = styled.div`
  position: absolute;
  right: 58px;

  @media (max-width: 1024px) {
    position: absolute;
    right: 20px;
  }
`;
