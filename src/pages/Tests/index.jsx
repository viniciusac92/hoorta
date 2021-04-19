import MenuDashboard from "../../components/template/MenuDashboard";
import CartInfo from "../../components/molecules/CartInfo";
import CartContainer from "../../components/organisms/CardContainer";
import CardCart from "../../components/molecules/CardCart";

const Tests = () => {
  return (
    <div>
      <MenuDashboard>
        <CartContainer>
          <CardCart amout="5" />
          <CartInfo deliveryPrice="5" />
        </CartContainer>
      </MenuDashboard>
    </div>
  );
};

export default Tests;
