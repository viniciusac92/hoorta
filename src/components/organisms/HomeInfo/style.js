import styled from "styled-components";

const HomeInfoStyled = styled.div`
  width: 50vw;
  transform: translateX(calc(45vw - 20px));
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

HomeInfoStyled.Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

HomeInfoStyled.Wrap = styled.div`
  text-align: center;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default HomeInfoStyled;