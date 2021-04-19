import { AppBarStyled } from "./style";
import Icon from "../../atoms/Icon";
import homeIcon from "../../../assets/images/icons/home.svg";
import favoriteIcon from "../../../assets/images/icons/heart.svg";
import cartIcon from "../../../assets/images/icons/shoppingCart.svg";
import profileIcon from "../../../assets/images/icons/profile.svg";
import { useHistory } from "react-router-dom";

const AppBar = () => {
  const history = useHistory();

  return (
    <AppBarStyled>
      <div onClick={() => history.push("/dashboard")}>
        <Icon src={homeIcon} display={["block", "block"]} />
      </div>
      <div onClick={() => history.push("/favorites")}>
        <Icon src={favoriteIcon} display={["block", "block"]} />
      </div>
      <div onClick={() => history.push("/cart")}>
        <Icon src={cartIcon} display={["block", "block"]} />
      </div>
      <div onClick={() => history.push("/profile/")}>
        <Icon src={profileIcon} display={["block", "block"]} />
      </div>
    </AppBarStyled>
  );
};

export default AppBar;
