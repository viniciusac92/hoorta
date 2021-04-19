import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledContainer = styled.div`
  .HeaderContainer {
    img {
      padding: 0;
      margin: 0 auto 2rem;
      max-width: none;
      width: 5.25rem;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      margin: 1rem;
      font-weight: ${theme.weight.regular};
    }
  }

  div {
    margin-bottom: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    input {
      width: 90%;
      margin: 1rem;
    }

    button {
      margin: 2rem;
      width: 90%;
      height: auto;
    }
  }

  @media screen and (min-width: 800px) {
    .HeaderContainer {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 2.5rem;
        padding: 0;
        margin: 0;
      }
      h1 {
        text-align: center;
        font-size: 2rem;
        margin: 1rem;
        margin-right: 2.5rem;
      }
    }
    form {
      width: 60%;
      margin: 0 auto;
    }
  }
`;

export default StyledContainer;
