import Image from "next/image";

import toastIcon from "assets/icons/toast-success.svg";

import { Container, Title } from "./toastContent.styles";

export const ToastContent = ({ title, description }) => {
  return (
    <Container>
      <Title>
        <Image src={toastIcon} alt="toast success icon" />
        <span>{title}</span>
      </Title>
      <p>{description}</p>
    </Container>
  );
};
