import { StyledButton } from "./button.styles";

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
