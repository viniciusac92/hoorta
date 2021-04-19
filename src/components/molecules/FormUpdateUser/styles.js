import styled from "styled-components";

export const StyledForm = styled.form`
  input {
    margin: 8px 0;
    width: 100%;
    overflow-y: scroll;
  }

  button {
    margin-top: 20px;
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .addressContainer p:nth-child(1),
  .ccContainer p:nth-child(1) {
    margin-bottom: 10px;
  }

  p {
    height: auto;
  }
`;
