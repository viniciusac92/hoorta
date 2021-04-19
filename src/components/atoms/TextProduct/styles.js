import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextProductStyled = styled.p`
	border: none;
	font-weight: ${({fontWeight}) =>
		fontWeight === "medium"
			? theme.weight.medium
			: fontWeight === "semiBold"
			? theme.weight.semiBold
			: null};

	font-size: ${({size}) =>
		size === "large" ? "6vw" : size === "medium" ? "2.2vw" : null};

	color: ${({color}) =>
		color === "black"
			? theme.color.black
			: color === "white"
			? theme.color.white
			: color === "primary"
			? theme.color.primary
			: null};

	@media screen and (min-width: 800px) {
		font-size: ${({size}) =>
			size === "large" ? "3vh" : size === "medium" ? "1.2rem" : null};
		margin: 2rem 0rem 1.5rem 0rem;
	}
`;
