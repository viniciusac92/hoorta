import styled from "styled-components";
import theme from "../../../styles/theme";

import perfilProdutor from "../../../assets/images/perfil/perfilProdutor.jpg";

export const StyledContainer = styled.div`
  @media screen and (max-width: 768px) {
    .HeaderContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .ButtonContainer {
        width: 100%;
        button {
          width: fit-content;
          background: none;
        }
      }

      .Picture {
        width: 200px;
        height: 200px;
        background-image: url(${perfilProdutor});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 100%;
      }

      p {
        margin: 2rem 0;
      }
    }
    .InfoContainer {
      background-color: ${theme.color.gray};
      margin: 1rem auto;
      padding: 1rem;
      max-width: 80%;

      box-shadow: ${theme.shadow.under};
    }
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 55vw;
    margin: 4rem;

    .HeaderContainer {
      margin-bottom: 4rem;
    }
    .InfoContainer {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      .Picture {
        margin-right: 4rem;
        height: 20rem;
        width: 80%;
        background-image: url(${perfilProdutor});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: ${theme.radius};
      }

      p {
        width: 35%;
        grid-area: Text;
        height: 100%;
      }
    }
  }
`;
