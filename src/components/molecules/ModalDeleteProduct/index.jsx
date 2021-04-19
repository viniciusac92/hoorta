import {useState} from "react";
import TextHeader from "../../atoms/TextHeader";
import {Modal, Fade} from "@material-ui/core";
import {GroupButton, StyledModal} from "./styles";
import Button from "../../atoms/Button";
import {deleteProduct, getProducts} from "../../../helper/products/index";
import API from "../../../services/api";
import {useProducts} from "../../../providers/ProductsContext";
import {useData} from "../../../providers/UserContext";

const ModalDeleteProduct = ({currentProductId}) => {
	const [isOpen, setIsOpen] = useState(false);

	const {setProductsData} = useProducts();

	const {userData} = useData();

	const toggleModal = () => setIsOpen(!isOpen);

	const handleDelete = async () => {
		try {
			await API.delete(deleteProduct(currentProductId), {
				headers: {
					Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
				},
			});
			const response = await API.get(
				getProducts(userData.id, userData.storeId),
				{
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem("token")
						)}`,
					},
				}
			);
			setProductsData(response.data);
		} catch (e) {
			console.log(e);
		}
		toggleModal();
	};

	const body = (
		<StyledModal>
			<TextHeader color="primary" size="medium" fontWeight="medium">
				Deseja Excluir ?
			</TextHeader>
			<GroupButton>
				<Button onClick={toggleModal} color="secondary" size="small">
					Não
				</Button>
				<Button onClick={handleDelete} color="primary" size="small">
					Sim
				</Button>
			</GroupButton>
		</StyledModal>
	);

	return (
		<>
			<p onClick={toggleModal}>Excluir</p>
			<Modal
				open={isOpen}
				onClose={toggleModal}
				disableBackdropClick={true}
				disableEscapeKeyDown={true}
				closeAfterTransition
				BackdropProps={{style: {backdropFilter: "blur(2px)"}}}>
				<Fade in={isOpen}>{body}</Fade>
			</Modal>
		</>
	);
};

export default ModalDeleteProduct;
