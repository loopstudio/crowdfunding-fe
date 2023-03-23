import ReactModal from "react-modal";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Button } from "components";
import { GoBackModalStyles } from "utils/modal";
import { TOAST_SUCCESS_CONFIG } from "utils/toast";
import toastIcon from "assets/icons/toast-success.svg";

import {
  Question,
  Description,
  ButtonsContainer,
  ToastContent,
  ToastTitle,
} from "./modal.styles";

export const Modal = ({ isModalOpen, handleModal }) => {
  const router = useRouter();

  const handleClose = () => {
    handleModal(false);
  };

  const handleConfirm = () => {
    router.push("/");
    toast(
      <ToastContent>
        <ToastTitle>
          <Image src={toastIcon} alt="toast success icon" />
          <span>Project deleted</span>
        </ToastTitle>
        <p>Your project has been deleted successfully </p>
      </ToastContent>,
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
