import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 20px;
    width: 100%;
    height: 88px;
  }

  div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  input {
    width: 100%;
    height: 45px;
  }

  textarea {
    width: 100%;
    height: 60px;
    padding: 7px;
  }

  .addressContainer p:nth-child(1),
  .ccContainer p:nth-child(1) {
    margin-bottom: 10px;
  }
`;
