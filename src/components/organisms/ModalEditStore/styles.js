import styled from "styled-components";
import theme from "../../../styles/theme";

const { color, shadow, radius } = theme;

export const StyledModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;

  position: absolute;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 10px;
  background-color: ${color.white};
  box-shadow: ${shadow};
  border-radius: ${radius};

  .headerContainer {
    padding-bottom: 10px;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    max-width: 600px;
    padding: 15px;
  }
`;

export const EditButton = styled.button`
  background: none;
  display: flex;
  height: 100%;
  float: right;
`;

export const EditButton2 = styled.button`
  background: none;
  display: flex;
  height: 100%;
  float: right;

  > img {
    padding: 0px;
  }
`;
