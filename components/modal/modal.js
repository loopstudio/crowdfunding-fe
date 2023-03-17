import ReactModal from "react-modal";
import { useRouter } from "next/router";

import { Button } from "components";

import { Question, Description, ButtonsContainer } from "./modal.styles";

export const Modal = ({ isModalOpen, handleModal }) => {
  const router = useRouter();

  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={() => {
        handleModal(false);
      }}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          background: "#1B1B1B",
          border: "1px solid rgba(255,255,255,0.25)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "flex-start",
          width: "540px",
          height: "217px",
          justifyContent: "space-between",
          boxShadow: "0px 4px 24px 0px #FFFFFF33",
          borderRadius: "0px",
          position: "absolute",
          top: "200px",
          left: "400px",
          right: "40px",
          bottom: "40px",
        },
      }}
    >
      <Question>Are You Sure?</Question>

      <Description>
        The project will be deleted automatically and you will lose your
        progress.
      </Description>

      <ButtonsContainer>
        <Button
          onClick={() => {
            handleModal(false);
          }}
        >
          No
        </Button>
        <Button onClick={() => router.push("/")}>Yes</Button>
      </ButtonsContainer>
    </ReactModal>
  );
};
