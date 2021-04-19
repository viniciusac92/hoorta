import styled from "styled-components";
import theme from "../../../styles/theme";

export const InputStyled = styled.input`
	border: none;
	margin: 5px;
	outline: none;
	border-radius: ${theme.radius};
	box-shadow: ${theme.shadow.under};
	font-family: ${theme.font};
	font-weight: ${theme.weight.medium};
	background-color: ${theme.color.gray};
	color: ${theme.color.black};
	text-indent: 15px;
	width: ${(props) =>
		props.size === "small"
			? "290px"
			: props.size === "large"
			? "356.67px"
			: null};

	height: ${(props) =>
		props.size === "small" ? "35px" : props.size === "large" ? "45px" : null};

	font-size: ${(props) =>
		props.size === "small" ? "14px " : props.size === "large" ? "16px" : null};

	// Remove as setas no input[type=number]
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
`;
