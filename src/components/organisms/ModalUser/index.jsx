import { useState } from "react";
import FormUpdateUser from "../../molecules/FormUpdateUser";
import TextHeader from "../../atoms/TextHeader";
import { Modal, Fade } from "@material-ui/core";
import { StyledModal, EditButton } from "./styles";
import Icon from "../../atoms/Icon";
import EditPencilIcon from "../../../assets/images/icons/editPencil.svg";
import Close from "../../../assets/images/icons/close.svg";

const ModalUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const body = (
    <StyledModal>
      <div className="headerContainer">
        <EditButton onClick={toggleModal}>
          <Icon src={Close} alt="Botão Fechar" display={["block", "block"]} />
        </EditButton>
        <TextHeader color="primary" size="medium" fontWeight="medium">
          Atualizar Dados
        </TextHeader>
      </div>
      <FormUpdateUser />
    </StyledModal>
  );

  return (
    <>
      <EditButton onClick={toggleModal}>
        <Icon
          src={EditPencilIcon}
          alt="Editar Perfil"
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

export default ModalUser;
