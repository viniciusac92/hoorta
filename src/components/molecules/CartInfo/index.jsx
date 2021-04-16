import CardInfoStyled from "./style";
import TextHeader from "../../atoms/TextHeader";
import Button from "../../atoms/Button";

const CartInfo = ({ deliveryPrice = 0, purchases = [] }) => {
  const purchasesPrice = purchases.map(({ info }) => info.price);

  return (
    <CardInfoStyled>
      <CardInfoStyled.Wrap>
        <TextHeader fontWeight="semiBold">
          Como quer receber sua entrega?
        </TextHeader>

        <CardInfoStyled.InputWrap>
          <input type="radio" name="deliveryType" checked />
          <span>Eu quero receber em minha casa</span>
        </CardInfoStyled.InputWrap>

        <CardInfoStyled.InputWrap>
          <input type="radio" name="deliveryType" />
          <span>Eu quero ir até lá buscar</span>
        </CardInfoStyled.InputWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Delivery</TextHeader>
          <TextHeader>R$ {deliveryPrice}</TextHeader>
        </CardInfoStyled.TextWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Compras</TextHeader>
          {purchasesPrice.map((price = 0, key) => (
            <TextHeader key={key}>R$ {price}</TextHeader>
          ))}
        </CardInfoStyled.TextWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Total</TextHeader>
          <TextHeader>
            R${" "}
            {purchasesPrice.reduce((acc, cur) => acc + cur, 0) +
              Number(deliveryPrice)}
          </TextHeader>
        </CardInfoStyled.TextWrap>
      </CardInfoStyled.Wrap>
      <CardInfoStyled.Wrap>
        <Button color="primary" size="medium">
          Finalizar compra
        </Button>
        <Button color="secondary" size="medium">
          Continuar comprando
        </Button>
      </CardInfoStyled.Wrap>
    </CardInfoStyled>
  );
};

export default CartInfo;
