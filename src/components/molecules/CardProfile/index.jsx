import { useData } from "../../../providers/UserContext";
import CardStyled from "./styles";
import Woman from "../../../assets/images/perfil/imgPerfil.jpg";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";
import ModalUser from "../../organisms/ModalUser";

const CardProfile = () => {
  const { userData } = useData();

  const infos = [
    { dice: [userData.address.road, " - ", userData.address.number] },
    { dice: [userData.address.city, " - ", userData.address.state] },
    { dice: userData.address.cep },
    { dice: userData.email },
    { dice: userData.phone },
  ];

  return (
    <CardStyled>
      <CardStyled.Background>
        <CardStyled.Image src={Woman} alt="imagePerfil" />
        <CardStyled.Container>
          <Text size="mediumPlus" weigth="semiBold">
            {userData.name} - {userData.age}
          </Text>
          <CardStyled.Icon>
            <ModalUser />
          </CardStyled.Icon>
          {infos.map(({ dice }, key) => (
            <Text key={key} size="medium">
              {dice}
            </Text>
          ))}
        </CardStyled.Container>
      </CardStyled.Background>
    </CardStyled>
  );
};
export default CardProfile;
