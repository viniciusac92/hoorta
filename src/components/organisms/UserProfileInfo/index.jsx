import Link from "../../atoms/Link";
import Button from "../../atoms/Button";
import CardProfile from "../../molecules/CardProfile";
import CardProfileMobile from "../../molecules/CarProfileMobile";
import InfoCC from "../../molecules/InfoCC";
import {useMediaQuery} from "react-responsive";
import {ContainerStyled} from "./styles";
import {useHistory} from "react-router";
import Icon from "../../atoms/Icon";
import IconEdit from "../../../assets/images/icons/editPencil.svg";
import ModalUser from "../ModalUser";
import {useData} from "../../../providers/UserContext";
import {useStores} from "../../../providers/StoresContext";
import StoreCard from "../../atoms/StoreCard";

const UserProfileInfo = () => {
	const history = useHistory();
	const {userData} = useData();
	const {storeData} = useStores();
	const isDesktop = useMediaQuery({
		minWidth: 769,
	});

	const isMobile = useMediaQuery({
		maxWidth: 768,
	});

	const handleLogOut = (path) => {
		localStorage.clear();
		history.push(path);
	};

	return (
		<div>
			<ContainerStyled>
				{isMobile && <CardProfileMobile />}
				{isDesktop && <CardProfile />}
				<ContainerStyled.Text>
					<InfoCC />
					<Button
						color="primary"
						size="medium"
						onClick={() => handleLogOut("/")}>
						Sair
					</Button>
				</ContainerStyled.Text>

				<ContainerStyled.Register>
					{userData.productor ? (
						<StoreCard store={storeData} />
					) : (
						<Link to="/register-store">
							Quer vender seus produtos? Então,{" "}
							<span>torne-se um vendedor!</span>
						</Link>
					)}
				</ContainerStyled.Register>
			</ContainerStyled>
		</div>
	);
};
export default UserProfileInfo;
