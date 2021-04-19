import HeaderDashboard from "../../molecules/HeaderDashboard";
import Search from "../../molecules/Search";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router";
import { useMediaQuery } from "react-responsive";

const DashboardHeader = ({ id }) => {
  const history = useHistory();
  const location = history.location.pathname;

  const show = () => {
    console.log(location);
    if (location === `/store/profile/${id}`) return false;
    if (location === "/dashboard" || location.indexOf("store") > -1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <HeaderContainer>
      <HeaderDashboard />
      {show() && <Search />}
    </HeaderContainer>
  );
};

export default DashboardHeader;
