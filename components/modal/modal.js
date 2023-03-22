import ReactModal from "react-modal";
import { useRouter } from "next/router";

import { Button } from "components";
import { GoBackModalStyles } from "utils/modal";

import { Question, Description, ButtonsContainer } from "./modal.styles";

export const Modal = ({ isModalOpen, handleModal }) => {
  const router = useRouter();

  const handleClose = () => {
    handleModal(false);
  };

  const handleConfirm = () => {
    router.push("/");
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={handleClose}
      style={GoBackModalStyles}
    >
      <Question>Are you sure?</Question>

      <Description>
        The project will be deleted automatically and you will lose your
        progress.
      </Description>

      <ButtonsContainer>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm}>Yes</Button>
      </ButtonsContainer>
    </ReactModal>
  );
};
