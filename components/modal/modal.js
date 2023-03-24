import ReactModal from "react-modal";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Button, ToastContent } from "components";
import { GoBackModalStyles } from "utils/modal";
import { TOAST_SUCCESS_CONFIG } from "utils/toast";
import { ROUTES } from "../../constants";

import { Question, Description, ButtonsContainer } from "./modal.styles";

export const Modal = ({ isModalOpen, handleModal }) => {
  const router = useRouter();

  const handleClose = () => {
    handleModal(false);
  };

  const handleConfirm = () => {
    router.push(ROUTES.home);
    toast(
      <ToastContent
        title="Project deleted"
        description="Your project has been deleted successfully"
      />,
      TOAST_SUCCESS_CONFIG
    );
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
