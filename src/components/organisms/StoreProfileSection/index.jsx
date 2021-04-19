import { useData } from "../../../providers/UserContext";
import Picture from "../../atoms/Picture";
import Text from "../../atoms/Text";
import TextHeader from "../../atoms/TextHeader";
import { StyledContainer } from "./styles";
import { useMediaQuery } from "react-responsive";
import { useStores } from "../../../providers/StoresContext";
import Icon from "../../atoms/Icon";
import Left from "../../../assets/images/icons/left.svg";
import { useHistory } from "react-router";

const StoreProfileSection = () => {
  const history = useHistory();
  const { storeData } = useStores();
  const { userData } = useData();
  const isMobile = useMediaQuery({
    maxWidth: 768,
  });
  const isDesktop = useMediaQuery({
    minWidth: 769,
  });

  const handleBack = () => {
    history.goBack();
  };

  return (
    <StyledContainer>
      {isMobile && (
        <>
          <div className="HeaderContainer">
            <div className="ButtonContainer">
              <button onClick={handleBack}>
                <Icon
                  src={Left}
                  alt="Botão Voltar"
                  display={["block", "block"]}
                />
              </button>
            </div>
            <div className="Picture" />
            <TextHeader size="large" color="black">
              {storeData.businessName}
            </TextHeader>
          </div>
          <div className="InfoContainer">
            <Text size="small" weight="semiBold">
              {storeData.description}
            </Text>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          {console.log(storeData)}
          <div className="HeaderContainer">
            <TextHeader size="large" color="black">
              {storeData.businessName}
            </TextHeader>
          </div>
          <div className="InfoContainer">
            <div className="Picture" />
            <Text size="small" weight="regular">
              {storeData.description}
            </Text>
          </div>
        </>
      )}
    </StyledContainer>
  );
};

export default StoreProfileSection;
