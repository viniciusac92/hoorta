import styled from "styled-components";
import Hortifruti from "../../../assets/images/hortifruti.jpg";
import theme from "../../../styles/theme";

export const CardContainer = styled.div`
  height: 160px;
  margin: 30px 20px;
  border-radius: 39px;
  background-image: url(${Hortifruti});
  background-position: left;
  background-size: cover;
  overflow: hidden;
  color: ${theme.color.gray};

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 800px) {
    height: 340px;

    max-width: 1000px;
    a {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }
  }
`;

export const RatingMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  background: ${theme.color.primary};
  border-radius: 39px;
  position: relative;
  bottom: 65px;
  left: 15px;

  img {
    margin: 0;
    padding: 5px;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const RatingDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  background: ${theme.color.primary};
  border-radius: 39px;
  margin: 20px;

  img {
    margin: 0;
    padding: 5px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  background: rgba(38, 38, 38, 0.6);
  height: calc(100% / 3);
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 0;
    text-align: center;
    width: 100%;
  }

  p:first-child {
    font-weight: ${theme.weight.semiBold};
    font-size: 20px;
  }

  p:last-child {
    color: inherit;
    display: none;
    font-weight: ${theme.weight.regular};
    font-size: 16px;
  }

  @media screen and (min-width: 800px) {
    height: 100%;
    flex-direction: column;

    p:first-child {
      padding: 0rem 1.5rem;
    }

    .descriptionContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 200px;
      margin-top: 10px;
      overflow-y: scroll;
      text-align: center;
    }
    .descriptionContainer::-webkit-scrollbar {
      display: none;
    }

    p:last-child {
      display: inline;
    }
  }
`;

export const Time = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: #f9f9f9;
  margin-top: 10px;
  width: 100%;
`;
