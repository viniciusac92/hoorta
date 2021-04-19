import DashboardHeader from "../../organisms/DashboardHeader";
import { GridContainer } from "./style";
import Sidebar from "../../molecules/SideBar";
import Picture from "../../atoms/Picture";
import footerPicture from "../../../assets/images/footerPicture.png";
import { useHistory } from "react-router";
import { useMediaQuery } from "react-responsive";
import AppBar from "../../organisms/Appbar/AppBar";

const MenuDashboard = ({ children, id }) => {
  const history = useHistory();
  const location = history.location.pathname;
  const isDesktop2 = useMediaQuery({
    maxWidth: 769,
  });

  const show2 = () => {
    if (isDesktop2 && location === "/profile") {
      return false;
    } else {
      return true;
    }
  };

  console.log(show2());
  return (
    <GridContainer>
      <div className="SidebarContainer">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="HeaderContainer">
        {show2() && <DashboardHeader id={id} />}
      </div>
      <div className="SectionContainer">
        <div className="scroll">{children}</div>
      </div>
      {/* <Picture
				image={footerPicture}
				width={["320px", "444px"]}
				height={["155px", "215px"]}
				position={["relative", "absolute"]}
				top={["0px", "calc(100% - 215px)"]}
				left={["-37px"]}
			/> */}
      {isDesktop2 && (
        <div className="appBar">
          <AppBar />
        </div>
      )}
    </GridContainer>
  );
};

export default MenuDashboard;
