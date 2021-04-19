import {forwardRef} from "react";
import {TextAreaStyled} from "./styles";

const TextArea = ({size, ...rest}, ref) => {
	return <TextAreaStyled ref={ref} size={size} {...rest} />;
};
export default forwardRef(TextArea);
