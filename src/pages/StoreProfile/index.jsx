import { useParams } from "react-router";
import StoreProfileSection from "../../components/organisms/StoreProfileSection";
import MenuDashboard from "../../components/template/MenuDashboard";

const StoreProfile = () => {
  const { id } = useParams();

  return (
    <MenuDashboard id={id}>
      <StoreProfileSection />
    </MenuDashboard>
  );
};

export default StoreProfile;
