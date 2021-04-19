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
  padding: 15px;
  outline: none;
  height: 80vh;
  background-color: ${color.white};
  box-shadow: ${shadow};
  border-radius: ${radius};
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }
  .headerContainer {
    text-align: center;
    padding-bottom: 10px;

    > p {
      margin-top: 15px;
    }
  }

  @media screen and (min-width: 800px) {
    max-width: 600px;
    height: 80vh;
  }
`;

export const EditButton = styled.button`
  background: none;
  height: 100%;
  float: right;
`;
