import styled from "styled-components";
import theme from "../../../styles/theme";
import Snackbar from "@material-ui/core/Snackbar";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0px 0px 0%;
  line-height: 65px;
`;

FormStyled.Text = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: ${theme.color.textGray};
  font-size: 18px;
  cursor: pointer;

  span {
    font-weight: ${theme.weight.semiBold};
    font-size: 20px;
  }

  &:hover {
    color: ${theme.color.primary};
  }
`;

FormStyled.Container = styled.div`
  text-align: center;
  max-width: 550px;
  height: 430px;
`;

FormStyled.Snackbar = styled(Snackbar)`
  top: -558px !important;
  left: 279px !important;
  z-index: -1 !important;

  .MuiPaper-root {
    background-color: ${theme.color.primary};
  }

  .MuiSnackbarContent-root {
    justify-content: center !important;
  }
`;

export default FormStyled;
