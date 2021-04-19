import styled from "styled-components";
import theme from "../../../styles/theme";
import Snackbar from "@material-ui/core/Snackbar";

export const SnackbarStyled = styled(Snackbar)`
  top: -538px !important;
  right: 5% !important;
  left: auto !important;
  z-index: -1 !important;

  .MuiPaper-root {
    background-color: ${theme.color.primary};
    max-height: 40px;
  }

  .MuiSnackbarContent-root {
    justify-content: center !important;
  }
`;
