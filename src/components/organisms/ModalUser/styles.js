import styled from "styled-components";
import theme from "../../../styles/theme";

const { color, shadow, radius } = theme;

export const StyledModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  outline: none;

  background-color: ${color.white};
  box-shadow: ${shadow};
  border-radius: ${radius};

  .headerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 800px) {
    max-width: 600px;
  }
`;

export const EditButton = styled.button`
  background: none;
  display: flex;
  height: 100%;
`;
