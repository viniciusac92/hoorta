import CardInfoStyled from "./style";
import TextHeader from "../../atoms/TextHeader";
import Button from "../../atoms/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ModalCart from "../ModalCart";

const CartInfo = ({ deliveryPrice = 0, purchases, finishPurchase }) => {
  const purchasesPrice =
    purchases && purchases.map(({ info }) => info.price * info.amount);
  const history = useHistory();
  const [deliveryPriceInput, setDeliveryPrice] = useState(deliveryPrice);

  return (
    <CardInfoStyled>
      <CardInfoStyled.Wrap>
        <TextHeader fontWeight="semiBold">
          Como quer receber sua entrega?
        </TextHeader>

        <CardInfoStyled.InputWrap>
          <input
            type="radio"
            name="deliveryType"
            defaultChecked
            onChange={() => setDeliveryPrice(deliveryPrice)}
          />
          <span>Eu quero receber em minha casa</span>
        </CardInfoStyled.InputWrap>

        <CardInfoStyled.InputWrap>
          <input
            type="radio"
            name="deliveryType"
            onChange={() => setDeliveryPrice("0")}
          />
          <span>Eu quero ir até lá buscar</span>
        </CardInfoStyled.InputWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Delivery</TextHeader>
          <TextHeader>R$ {deliveryPriceInput}</TextHeader>
        </CardInfoStyled.TextWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Compras</TextHeader> R${" "}
          {purchasesPrice && purchasesPrice.reduce((acc, cur) => acc + cur, 0)}
        </CardInfoStyled.TextWrap>

        <CardInfoStyled.TextWrap>
          <TextHeader>Total</TextHeader>
          <TextHeader>
            R${" "}
            {purchasesPrice &&
              purchasesPrice.reduce((acc, cur) => acc + cur, 0) +
                Number(deliveryPriceInput)}
          </TextHeader>
        </CardInfoStyled.TextWrap>
      </CardInfoStyled.Wrap>
      <CardInfoStyled.Wrap>
        <ModalCart />
        <Button
          color="secondary"
          size="medium"
          onClick={() => history.push("/dashboard")}
        >
          Continuar comprando
        </Button>
      </CardInfoStyled.Wrap>
    </CardInfoStyled>
  );
};

export default CartInfo;
