import { useData } from "../../../providers/UserContext";
import { CardStyled } from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import Left from "../../../assets/images/icons/left.png";
import IconEdit from "../../../assets/images/icons/editPencil.svg";
import CardInfoUserProfile from "../../atoms/CardInfoUserProfile";
import { useHistory } from "react-router-dom";
import ModalUser from "../../organisms/ModalUser";

const CardProfileMobile = () => {
  const { userData } = useData();
  const history = useHistory();
  const handleLogout = () => {
    history.goBack();
  };

  const text = [
    { dice: [userData.address.road, " - ", userData.address.number] },
    { dice: [userData.address.city, " - ", userData.address.state] },
    { dice: userData.address.cep },
    { dice: userData.email },
    { dice: userData.phone },
  ];

  return (
    <CardStyled.Container>
      <CardStyled>
        <CardStyled.Logout onClick={handleLogout}>
          <Icon src={Left} alt="Botão Voltar" display={["block", "block"]} />
        </CardStyled.Logout>
        <CardStyled.Icon>
          <ModalUser />
        </CardStyled.Icon>
        <CardStyled.Background>
          <CardStyled.Title>
            <Text size="mediumPlus" weigth="semiBold">
              {userData.name} - {userData.age}
            </Text>
          </CardStyled.Title>
        </CardStyled.Background>
      </CardStyled>

      <CardStyled.Image>
        <img src={Woman} alt="imagePerfil" />
      </CardStyled.Image>

      <CardInfoUserProfile>
        {text.map(({ dice }, key) => (
          <Text key={key} size="small">
            {dice}
          </Text>
        ))}
      </CardInfoUserProfile>
    </CardStyled.Container>
  );
};
export default CardProfileMobile;
