import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
