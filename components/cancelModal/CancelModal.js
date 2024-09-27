import ReactModal from "react-modal";

import { Button } from "components";
import { GoBackModalStyles } from "utils/modal";

import { Question, Description, ButtonsContainer } from "../modal/modal.styles";

export const CancelModal = ({
  isModalOpen,
  handleModal,
  projectName,
  onConfirm,
}) => {
  const handleClose = () => {
    handleModal(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={handleClose}
      style={GoBackModalStyles}
      ariaHideApp={false}
    >
      <Question>Are you sure you want to cancel {projectName}?</Question>

      <Description>
        The project will be deleted automatically and you will lose your funds.
      </Description>

      <ButtonsContainer>
        <Button onClick={handleClose}>No</Button>
        <Button onClick={handleConfirm}>Yes</Button>
      </ButtonsContainer>
    </ReactModal>
  );
};
