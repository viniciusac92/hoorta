import CardCartStyled from "./style";
import Icon from "../../atoms/Icon";
import closeIcon from "../../../assets/images/icons/close.svg";

const CardCart = ({
  id,
  amount,
  price,
  productName,
  productorName,
  removeToCart,
}) => {
  return (
    <CardCartStyled>
      <CardCartStyled.Wrap>
        <CardCartStyled.Amount>{amount} X</CardCartStyled.Amount>
      </CardCartStyled.Wrap>
      <CardCartStyled.Wrap>
        <CardCartStyled.Text highlight>{productName}</CardCartStyled.Text>
        <CardCartStyled.Text>{productorName}</CardCartStyled.Text>
        <CardCartStyled.Price>R$ {price}</CardCartStyled.Price>
      </CardCartStyled.Wrap>
      <CardCartStyled.Wrap onClick={() => removeToCart(id)}>
        <Icon src={closeIcon} display={["block", "block"]} />
      </CardCartStyled.Wrap>
    </CardCartStyled>
  );
};

export default CardCart;
