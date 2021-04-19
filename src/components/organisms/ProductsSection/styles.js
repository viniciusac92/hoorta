import styled from "styled-components";
import theme from "../../../styles/theme";
import ProductCard from "../../atoms/ProductCard";
import ButtonCount from "../../molecules/ButtonCount";
import Snackbar from "@material-ui/core/Snackbar";

export const ProductsListStyled = styled.div`
  height: auto;
  max-width: 100%;
  margin: 30px 20px;
  overflow: hidden;

  > div {
    margin-bottom: 20px;
  }

  .iconPlus {
    display: flex;
    float: right;
    padding-right: 30px;
  }

  .iconPlus button:last-child img {
    height: auto;
    max-width: 28px;
    height: auto;
  }

  @media screen and (min-width: 800px) {
    max-width: 1046px;

    > a {
      font-size: 2.5vh;
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      align-items: center;
    }
  }
`;

export const ProductCardStyled = styled(ProductCard)`
  display: flex;
  align-items: center;
  box-shadow: ${theme.shadow};

  > div:first-child {
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin: 0 10px;
  }

  @media screen and (min-width: 800px) {
    border-radius: ${theme.radius};

    > div:nth-child(1) {
      background-repeat: no-repeat;
      border-radius: ${theme.radius} 0px 0px ${theme.radius};
      object-position: right;
      object-fit: cover;
      width: 224px;
      height: 100%;
      top: 0px;
      left: 0px;
      margin: 0px;
    }
  }
`;

export const ContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 110px;
  overflow: hidden;
  margin: 5px;
  > p {
    margin: 5px 0px;
  }

  div > p:nth-child(3) {
  }

  div:nth-child(2) > div > p {
  }

  @media screen and (min-width: 800px) {
    padding: 0 1.5vw;

    > p {
      margin: 20px 0px;
      overflow-y: scroll;
      height: 60px;
    }

    > div > p:nth-child(2) {
      width: 35vw;
    }

    > div:nth-child(2) > div > p {
      margin-bottom: 0vh !important;
    }

    > div > p:nth-child(3) {
      margin-bottom: 0.3vh;
      font-size: 2.5vh;
    }
  }
`;

export const TitleDivStyled = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    margin-left: 15px;
    width: 5vw;
    height: auto;
  }

  @media screen and (min-width: 800px) {
    > div {
      margin: 2rem 0rem 1.5rem 1rem;
      width: 2rem;
      height: auto;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const BottomContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px 0px 0px;
  align-items: center;

  div {
    width: 15vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  > p {
    margin: 0rem 0rem 0rem 0rem;
    font-size: 13px;
    width: 40%;
  }

  img {
    height: 10px;
    padding: 0px;
  }

  button {
    line-height: 10px;
    height: 5vh;
    padding: 0px;
    width: 40%;
    font-size: 12px;
    margin: 5px;
  }

  p {
    margin: 0rem 0rem 0rem 0rem;
    font-size: 3vw;
  }

  @media screen and (min-width: 800px) {
    width: 33vw;
    align-items: center;
    flex-wrap: wrap;
    min-height: 153px;
    /* position: relative;
		top: -1vh; */

    > p {
      width: 100%;
      font-size: 2rem;
    }

    > div {
      width: 20%;
      > p {
        font-size: 2rem;
      }
    }

    button {
      height: 3rem;
      font-size: 1rem;
    }

    > button:nth-child(2) {
      height: 3.67vw;
      width: 16vw;
      font-size: 15px;
      font-size: 23px;
    }
  }
`;

export const ButtonCountStyled = styled(ButtonCount)`
  height: 20vh !important;
  @media screen and (min-width: 800px) {
    > div {
    }
  }
`;

export const TopContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  align-items: center;
  margin-top: 2vh;

  > div > button > span > img {
    height: 3vh;
    padding: 0px;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 0vw;

    > div {
    }

    > div > button > span > img {
      height: 3vh;
      padding: 0px;
    }

    > img {
      height: 5vh;
    }
  } ;
`;

export const SnackBar = styled(Snackbar)`
  top: -538px !important;
  right: 5% !important;
  left: auto !important;
  z-index: -1 !important;

  .MuiPaper-root {
    background-color: ${theme.color.primary};
  }

  .MuiSnackbarContent-root {
    justify-content: center !important;
  }
`;
