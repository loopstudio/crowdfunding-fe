import { Label } from "../../pages/create/create.styles";
import { StyledInput } from "./input.styles";

const Input = ({ name, label, register, error, type, value }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value}
        {...register(name)}
      />
      {error && <p style={{ color: "red", margin: 0 }}>{error.message}</p>}
    </>
  );
};

export default Input;
