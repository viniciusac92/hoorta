import styled from "styled-components";

const MeetStyled = styled.div`
  margin: 50px auto;
  text-align: center;
  width: 100%;
  height: 370px;

  @media screen and (min-width: 780px) {
    width: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 120px 0px 0px 5%;
    line-height: 65px;
    text-align: left;
  }
`;

MeetStyled.ButtonWrap = styled.div`
  margin-top: 50px;
`;

export default MeetStyled;
