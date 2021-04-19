import { useState } from "react";
import TextHeader from "../../atoms/TextHeader";
import { Modal, Fade } from "@material-ui/core";
import { StyledModal, EditButton, EditButton2 } from "./styles";
import Icon from "../../atoms/Icon";
import PencilBlackIcon from "../../../assets/images/icons/pencilBlack.svg";
import Close from "../../../assets/images/icons/close.svg";
import FormEditStore from "../../molecules/FormEditStore";

const ModalEditStore = ({ currentStoreId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const body = (
    <StyledModal>
      <div className="headerContainer">
        <EditButton2 onClick={toggleModal}>
          <Icon src={Close} alt="Botão Fechar" display={["block", "block"]} />
        </EditButton2>
        <TextHeader color="primary" size="medium" fontWeight="medium">
          Editar Loja
        </TextHeader>
      </div>
      <FormEditStore currentStoreId={currentStoreId} />
    </StyledModal>
  );

  return (
    <>
      <EditButton onClick={toggleModal}>
        <Icon
          src={PencilBlackIcon}
          alt="Editar Loja"
          display={["block", "block"]}
        />
      </EditButton>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        closeAfterTransition
        BackdropProps={{ style: { backdropFilter: "blur(2px)" } }}
      >
        <Fade in={isOpen}>{body}</Fade>
      </Modal>
    </>
  );
};

export default ModalEditStore;
