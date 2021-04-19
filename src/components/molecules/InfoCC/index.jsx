import { useData } from "../../../providers/UserContext";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";
import Text from "../../atoms/Text";
import { InfosCCStyled } from "./styles";

const InfoCC = () => {
  const { userData } = useData();

  const ccMask = () => {
    let lastDigits = userData.cc.cc_number.slice(-4);

    return `XXXX XXXX XXXX ${lastDigits}`;
  };

  return (
    <InfosCCStyled>
      <CardInfoUserProfile size="large">
        {userData.cc.owner ? (
          <>
            <Text size="large" weigth="semiBold">
              Dados do cartão
            </Text>
            <Text size="small">{userData.cc.owner}</Text>
            <Text size="small">{userData.cc.cc_number && ccMask()}</Text>
          </>
        ) : (
          <span>Não há cartão cadastrado</span>
        )}
      </CardInfoUserProfile>
    </InfosCCStyled>
  );
};
export default InfoCC;
