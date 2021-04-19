import MenuDashboard from "../../components/template/MenuDashboard";
import CartInfo from "../../components/molecules/CartInfo";
import CartContainer from "../../components/organisms/CardContainer";
import CardCart from "../../components/molecules/CardCart";
import { useState, useEffect } from "react";
import { CardWrap, CartModal, EmptyMessage } from "./styles";
import { useHistory } from "react-router-dom";
import { set } from "react-hook-form";

const Cart = () => {
  const [isFinished, setIsFinished] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cart")));
    console.log(cartProducts);
  }, [false]);

  const removeToCart = (idToRemove) => {
    if (cartProducts.length === 1) {
      setCartProducts([]);
      localStorage.setItem("cart", JSON.stringify([]));
      return;
    }
    setCartProducts(cartProducts.filter(({ id }) => id !== idToRemove));
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    console.log(cartProducts);
  };

  const finishPurchase = () => {
    console.log("cabo comprinha");
    setIsFinished(true);
  };

  return (
    <div>
      {console.log(cartProducts.length)}
      {cartProducts.length > 0 ? (
        <MenuDashboard>
          <CartContainer>
            <CardWrap>
              {cartProducts.map((product, key) => (
                <CardCart
                  id={product?.id}
                  amount={product?.info.amount}
                  price={product?.info.price}
                  productName={product.info.name}
                  productorName={product?.info.description}
                  removeToCart={removeToCart}
                />
              ))}
            </CardWrap>
            <CartInfo
              deliveryPrice="5"
              purchases={cartProducts}
              finishPurchase={finishPurchase}
            />
          </CartContainer>
        </MenuDashboard>
      ) : (
        <MenuDashboard>
          <CartContainer>
            <EmptyMessage onClick={() => history.push("/dashboard")}>
              Oops! Parece que seu carrinho está vazio.{" "}
              <span>Que tal encher ele?</span>
            </EmptyMessage>
          </CartContainer>
        </MenuDashboard>
      )}
    </div>
  );
};

export default Cart;
