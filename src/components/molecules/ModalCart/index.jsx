import { useState } from "react";
import TextHeader from "../../atoms/TextHeader";
import { Modal, Fade } from "@material-ui/core";
import { GroupButton, StyledModal } from "./styles";
import Button from "../../atoms/Button";
import { deleteProduct, getProducts } from "../../../helper/products/index";
import { useHistory } from "react-router-dom";

const ModalCart = ({ currentProductId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const finixe = () => {
    toggleModal();
    history.push("/dashboard");
  };
  const body = (
    <StyledModal>
      <TextHeader color="primary" size="medium" fontWeight="medium">
        Sua Compra foi Finalizada !
      </TextHeader>
      <GroupButton>
        <Button onClick={() => finixe()} color="primary" size="small">
          Voltar
        </Button>
      </GroupButton>
    </StyledModal>
  );

  return (
    <>
      <Button color="primary" size="medium" onClick={toggleModal}>
        Finalizar compra
      </Button>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        disableBackdropClick={true}
        closeAfterTransition
        BackdropProps={{ style: { backdropFilter: "blur(2px)" } }}
      >
        <Fade in={isOpen}>{body}</Fade>
      </Modal>
    </>
  );
};

export default ModalCart;
