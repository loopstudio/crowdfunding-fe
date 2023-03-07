import Image from "next/image";
import { forwardRef } from "react";

import { Label } from "pages/create/create.styles";
import errorIcon from "assets/icons/error.svg";
import validIcon from "assets/icons/valid.svg";

import { StyledInput, Message, Wrapper } from "./input.styles";

export const Input = forwardRef(function InputWithRef(
  { name, label, error, isDirty, type, ...props },
  ref
) {
  const isValid = isDirty && !error;

  const calculateState = () => {
    if (error) return "error";
    if (isValid) return "valid";
    return null;
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>

      <Wrapper>
        <StyledInput
          type={type}
          name={name}
          id={name}
          ref={ref}
          state={calculateState()}
          {...props}
        />

        {error && <Image src={errorIcon} alt="error icon" />}
        {isValid && <Image src={validIcon} alt="valid icon" />}
      </Wrapper>
      {error && <Message state={calculateState()}>{error.message}</Message>}
    </div>
  );
});
